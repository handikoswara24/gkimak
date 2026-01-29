import catchAsyncErrors from "@/middlewares/catchAsyncErrors";
import { NextRequest, NextResponse } from "next/server";
import ErrorHandler from "@/utils/errorHandler";
import { Pagination } from "@/types/pagination";
import InventoryCategory from "@/models/inventoryCategoryModel";
import { InventoryCategoryInput } from "@/types/inventoryCategory";

const addInventoryCategory = catchAsyncErrors(async (req: NextRequest) => {
    const body = await req.json() as InventoryCategoryInput;

    const inventoryCategory = await InventoryCategory.create({...body})
    return NextResponse.json({
        message: "Success"
    });
});

const getAllInventoryCategory = catchAsyncErrors(async (req: NextRequest) => {
    const page = Number(req.nextUrl.searchParams.get("page") ?? 1);
    const numberPerPage = Number(req.nextUrl.searchParams.get("numberPerPage") ?? 20);
    const search = req.nextUrl.searchParams.get("search") ?? "";
    let query = {};
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
    const inventoryCategory = await InventoryCategory.find(query).skip((page - 1) * numberPerPage).limit(numberPerPage);
    const total = await InventoryCategory.find(query).countDocuments();
    const pagination: Pagination = {
        numberPerPage,
        page,
        total
    }
    return NextResponse.json({
        inventoryCategory,
        pagination
    });
});

const updateInventoryCategory = catchAsyncErrors(async (req: NextRequest, { params }: { params: { id: string } }) => {
    const inventoryCategory = await InventoryCategory.findById(params.id);

    if (!inventoryCategory) {
        throw new ErrorHandler("Inventory Category not found", 404);
    }

    const body = await req.json() as InventoryCategoryInput;

    inventoryCategory.name = body.name;
    inventoryCategory.code = body.code;
    inventoryCategory.parentId = body.parentId;
    inventoryCategory.parentLookup = body.parentLookup;

    await inventoryCategory.save();
    return NextResponse.json({
        message: "Success"
    });
});

const deleteInventoryCategory = catchAsyncErrors(async (req: NextRequest, { params }: { params: { id: string } }) => {
    const inventoryCategory = await InventoryCategory.findById(params.id);

    if (!inventoryCategory) {
        throw new ErrorHandler("Inventory Category not found", 404);
    }

    await inventoryCategory.deleteOne();
    return NextResponse.json({
        message: "Success"
    });
});

export {
    addInventoryCategory,
    deleteInventoryCategory,
    getAllInventoryCategory,
    updateInventoryCategory
}