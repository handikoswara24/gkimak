import catchAsyncErrors from "@/middlewares/catchAsyncErrors";
import { NextRequest, NextResponse } from "next/server";
import ErrorHandler from "@/utils/errorHandler";
import { Pagination } from "@/types/pagination";
import { OptionsInput } from "@/types/options";
import Option from "@/models/optionModel";

const addOption = catchAsyncErrors(async (req: NextRequest) => {
    const body = await req.json() as OptionsInput;

    const option = await Option.create({...body})
    return NextResponse.json({
        message: "Success"
    });
});

const getAllOption = catchAsyncErrors(async (req: NextRequest) => {
    const page = Number(req.nextUrl.searchParams.get("page") ?? 1);
    const numberPerPage = Number(req.nextUrl.searchParams.get("numberPerPage") ?? 20);
    const search = req.nextUrl.searchParams.get("search") ?? "";
    const type = req.nextUrl.searchParams.get("type") ?? "";
    let query : any = {};
    if (search) {
        query = {
            "$or": [
                {
                    name: {
                        $regex: search,
                        '$options': 'i'
                    }
                }
            ]
        }
    }

    if(type){
        query.type = type;
    }
    const option = await Option.find(query).skip((page - 1) * numberPerPage).limit(numberPerPage);
    const total = await Option.countDocuments();
    const pagination: Pagination = {
        numberPerPage,
        page,
        total
    }
    return NextResponse.json({
        option,
        pagination
    });
});

const updateOption = catchAsyncErrors(async (req: NextRequest, { params }: { params: { id: string } }) => {
    const option = await Option.findById(params.id);

    if (!option) {
        throw new ErrorHandler("Option not found", 404);
    }

    const body = await req.json() as OptionsInput;

    option.name = body.name;
    option.description = body.description;
    option.type = body.type;

    await option.save();
    return NextResponse.json({
        message: "Success"
    });
});

const deleteOption = catchAsyncErrors(async (req: NextRequest, { params }: { params: { id: string } }) => {
    const option = await Option.findById(params.id);

    if (!option) {
        throw new ErrorHandler("Option not found", 404);
    }

    await option.deleteOne();
    return NextResponse.json({
        message: "Success"
    });
});

export {
    addOption,
    getAllOption,
    updateOption,
    deleteOption
}