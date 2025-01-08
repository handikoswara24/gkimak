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
        image
    })


    return NextResponse.json({
        message: "Success"
    });
});

const getAllRenungan = catchAsyncErrors(async (req: NextRequest) => {
    const page = Number(req.nextUrl.searchParams.get("page") ?? 1);
    const numberPerPage = Number(req.nextUrl.searchParams.get("numberPerPage") ?? 20);
    const renungan = await RenunganHarianModel.find({date: {
        $lte: new Date()
    }}).sort({date: -1})
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
    const renungan = await RenunganHarianModel.find({}).sort({date: -1})
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
    renungan.author =  body.author;
    renungan.date = body.date;
    renungan.title = body.title;
    renungan.verse = body.verse;
    renungan.slug = Slugtify(body.title);
    await renungan.save();

    return NextResponse.json({
        message: "Success"
    });
});

const deleteRenungan = catchAsyncErrors(async (req: NextRequest, { params }: { params: { id: string } }) => {
    const renungan = await RenunganHarianModel.findById(params.id);
    if (renungan) {
        if(renungan.image.length > 0){
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

const template = catchAsyncErrors(async (req: NextRequest) => {
    return NextResponse.json({

    });
});

export {
    addRenungan,
    updateRenungan,
    getAllRenungan,
    deleteRenungan,
    getAllRenunganAdmin
}