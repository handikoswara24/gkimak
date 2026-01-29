import catchAsyncErrors from "@/middlewares/catchAsyncErrors";
import { NextRequest, NextResponse } from "next/server";
import ErrorHandler from "@/utils/errorHandler";
import { Pagination } from "@/types/pagination";
import { ImageRenungan, RenunganHarianInput } from "@/types/renunganharian";
import CloudinaryClass from "@/utils/cloudinaryclass";
import ImageModel from "@/models/imageModel";
import RenunganHarianModel from "@/models/renunganHarianModel";
import { Slugtify } from "@/utils/slugify";

const addRenungan = catchAsyncErrors(async (req: NextRequest) => {
    const body = await req.json() as RenunganHarianInput;
    const image: ImageRenungan[] = [];

    if (body.image?.length > 0) {
        const cloudinary = new CloudinaryClass("dsntwgt8f", "235937785859219", "jCe4VXYL_0xVyxBHuqP_Idv1HIM", "renunganharian");
        const imageResult = await cloudinary.UploadImage(body.image[0]);

        await ImageModel.create({
            cloudinaryid: imageResult.public_id,
            url: imageResult.secure_url
        });

        image.push({
            sort: 1,
            url: imageResult.secure_url
        })
    }

    const renungan = await RenunganHarianModel.create({
        content: body.content,
        author: body.author,
        date: body.date,
        title: body.title,
        slug: Slugtify(body.title),
        verse: body.verse,
        refleksi: body.refleksi,
        ayatColor: body.ayatColor,
        ayatBgColor: body.ayatBgColor,
        renunganColor: body.renunganColor,
        renunganBgColor: body.renunganBgColor,
        refleksiColor: body.refleksiColor,
        refleksiBgColor: body.refleksiBgColor,
        image,
        isiAyat: body.isiAyat
    })


    return NextResponse.json({
        message: "Success"
    });
});

const getAllRenungan = catchAsyncErrors(async (req: NextRequest) => {
    const page = Number(req.nextUrl.searchParams.get("page") ?? 1);
    const numberPerPage = Number(req.nextUrl.searchParams.get("numberPerPage") ?? 20);
    const renungan = await RenunganHarianModel.find({
        date: {
            $lte: new Date()
        }
    }).sort({ date: -1 })
        .skip((page - 1) * numberPerPage).limit(numberPerPage);
    const total = await RenunganHarianModel.countDocuments();
    const pagination: Pagination = {
        numberPerPage,
        page,
        total
    }
    return NextResponse.json({
        renungan,
        pagination
    });
});

const getAllRenunganAdmin = catchAsyncErrors(async (req: NextRequest) => {
    const page = Number(req.nextUrl.searchParams.get("page") ?? 1);
    const numberPerPage = Number(req.nextUrl.searchParams.get("numberPerPage") ?? 20);
    const search = req.nextUrl.searchParams.get("search") ?? "";
    let query = {};
    if (search) {
        query = {
            "$or": [
                {
                    author: {
                        $regex: search,
                        '$options': 'i'
                    }
                },
                {
                    title: {
                        $regex: search,
                        '$options': 'i'
                    }
                },
                {
                    verse: {
                        $regex: search,
                        '$options': 'i'
                    }
                }
            ]
        }
    }

    const renungan = await RenunganHarianModel.find(query).sort({ date: -1 })
        .skip((page - 1) * numberPerPage).limit(numberPerPage);
    const total = await RenunganHarianModel.find(query).countDocuments();
    const pagination: Pagination = {
        numberPerPage,
        page,
        total
    }
    return NextResponse.json({
        renungan,
        pagination
    });
});

const updateRenungan = catchAsyncErrors(async (req: NextRequest, { params }: { params: { id: string } }) => {
    const renungan = await RenunganHarianModel.findById(params.id);

    if (!renungan) {
        throw new ErrorHandler("Renungan not found", 404);
    }

    const body = await req.json() as RenunganHarianInput;
    const image: ImageRenungan[] = [];

    if (body.image?.length > 0) {
        const cloudinary = new CloudinaryClass("dsntwgt8f", "235937785859219", "jCe4VXYL_0xVyxBHuqP_Idv1HIM", "renunganharian");

        if (renungan.image.length > 0) {
            const imageModel = await ImageModel.findOne({ url: renungan.image[0].url });

            if (imageModel) {
                await cloudinary.DeleteImage(imageModel.cloudinaryid);
            }

            const imageResult = await cloudinary.UploadImage(body.image[0]);

            imageModel.url = imageResult.secure_url;
            imageModel.cloudinaryid = imageResult.public_id;
            await imageModel.save();

            image.push({
                sort: 1,
                url: imageResult.secure_url
            })
        }
        else {
            const imageResult = await cloudinary.UploadImage(body.image[0]);

            await ImageModel.create({
                cloudinaryid: imageResult.public_id,
                url: imageResult.secure_url
            });

            image.push({
                sort: 1,
                url: imageResult.secure_url
            })
        }
        renungan.image = image;
    }

    renungan.content = body.content;
    renungan.author = body.author;
    renungan.date = body.date;
    renungan.title = body.title;
    renungan.verse = body.verse;
    renungan.slug = Slugtify(body.title);
    renungan.refleksi = body.refleksi;
    renungan.ayatColor = body.ayatColor;
    renungan.ayatBgColor = body.ayatBgColor;
    renungan.renunganColor = body.renunganColor;
    renungan.renunganBgColor = body.renunganBgColor;
    renungan.refleksiColor = body.refleksiColor;
    renungan.refleksiBgColor = body.refleksiBgColor;
    renungan.isiAyat = body.isiAyat;
    await renungan.save();

    return NextResponse.json({
        message: "Success"
    });
});

const deleteRenungan = catchAsyncErrors(async (req: NextRequest, { params }: { params: { id: string } }) => {
    const renungan = await RenunganHarianModel.findById(params.id);
    if (renungan) {
        if (renungan.image.length > 0) {
            const cloudinary = new CloudinaryClass("dsntwgt8f", "235937785859219", "jCe4VXYL_0xVyxBHuqP_Idv1HIM", "renunganharian");
            const imageModel = await ImageModel.findOne({ url: renungan.image[0].url });

            if (imageModel) {
                await cloudinary.DeleteImage(imageModel.cloudinaryid);
                await imageModel.deleteOne();
            }
        }
        await renungan.deleteOne();

        return NextResponse.json({
            message: 'Renungan removed'
        });
    } else {
        throw new ErrorHandler("Renungan not found", 404);
    }
});

const getRenunganBySlug = catchAsyncErrors(async (req: NextRequest, { params }: { params: { slug: string } }) => {
    const slug = params.slug;

    if (!slug) {
        throw new ErrorHandler("Renungan Not Found", 404);
    }

    const renungan = await RenunganHarianModel.findOne({ slug });

    if (!renungan) {
        throw new ErrorHandler("Renungan Not Found", 404);
    }

    return NextResponse.json(renungan);
});

const template = catchAsyncErrors(async (req: NextRequest) => {
    return NextResponse.json({

    });
});

export {
    addRenungan,
    updateRenungan,
    getAllRenungan,
    deleteRenungan,
    getAllRenunganAdmin,
    getRenunganBySlug
}