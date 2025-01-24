import catchAsyncErrors from "@/middlewares/catchAsyncErrors";
import { NextRequest, NextResponse } from "next/server";
import ErrorHandler from "@/utils/errorHandler";
import { Pagination } from "@/types/pagination";
import { GetJemaatInput, JemaatInput } from "@/types/jemaat";
import Jemaat from "@/models/jemaatModel";

const addJemaat = catchAsyncErrors(async (req: NextRequest) => {
    const body = await req.json() as JemaatInput;

    const jemaat = await Jemaat.create({
        nama: body.nama,
        nomorAnggota: body.nomorAnggota,
        telepon: body.telepon
    })
    return NextResponse.json({
        message: "Success"
    });
});

const getAllJemaat = catchAsyncErrors(async (req: NextRequest) => {
    const page = Number(req.nextUrl.searchParams.get("page") ?? 1);
    const numberPerPage = Number(req.nextUrl.searchParams.get("numberPerPage") ?? 20);
    const search = req.nextUrl.searchParams.get("search") ?? "";
    let query = {};
    if (search) {
        query = {
            "$or": [
                {
                    nama: {
                        $regex: search,
                        '$options': 'i'
                    }
                },
                {
                    telepon: {
                        $regex: search,
                        '$options': 'i'
                    }
                },
                {
                    nomorAnggota: {
                        $regex: search,
                        '$options': 'i'
                    }
                }
            ]
        }
    }
    const jemaat = await Jemaat.find(query).skip((page - 1) * numberPerPage).limit(numberPerPage);
    const total = await Jemaat.countDocuments();
    const pagination: Pagination = {
        numberPerPage,
        page,
        total
    }
    return NextResponse.json({
        jemaat,
        pagination
    });
});

const updateJemaat = catchAsyncErrors(async (req: NextRequest, { params }: { params: { id: string } }) => {
    const jemaat = await Jemaat.findById(params.id);

    if (!jemaat) {
        throw new ErrorHandler("Jemaat not found", 404);
    }

    const body = await req.json() as JemaatInput;

    jemaat.nama = body.nama;
    jemaat.nomorAnggota = body.nomorAnggota;
    jemaat.telepon = body.telepon;

    await jemaat.save();
    return NextResponse.json({
        message: "Success"
    });
});

const deleteJemaat = catchAsyncErrors(async (req: NextRequest, { params }: { params: { id: string } }) => {
    const jemaat = await Jemaat.findById(params.id);

    if (!jemaat) {
        throw new ErrorHandler("Jemaat not found", 404);
    }

    await jemaat.deleteOne();
    return NextResponse.json({
        message: "Success"
    });
});

const getJemaatByPhone = catchAsyncErrors(async (req: NextRequest) => {
    const body = await req.json() as GetJemaatInput;

    const jemaat = await Jemaat.findOne({ telepon: body.telepon });

    return NextResponse.json({
        nama: jemaat.nama,
        nomorAnggota: jemaat.nomorAnggota,
        telepon: jemaat.telepon,
        _id: jemaat._id
    });
});

const template = catchAsyncErrors(async (req: NextRequest) => {
    return NextResponse.json({

    });
});

export {
    addJemaat,
    updateJemaat,
    getAllJemaat,
    getJemaatByPhone,
    deleteJemaat
}