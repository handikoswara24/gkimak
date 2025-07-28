import catchAsyncErrors from "@/middlewares/catchAsyncErrors";
import { NextRequest, NextResponse } from "next/server";
import ErrorHandler from "@/utils/errorHandler";
import { Pagination } from "@/types/pagination";
import Inventory from "@/models/inventoryModel";
import { InventoryInput } from "@/types/inventory";
import InventoryCategory from "@/models/inventoryCategoryModel";
import { InventoryCategoryType } from "@/types/inventoryCategory";

const getCode = async (code: string, categoryId: string) => {
    const category = await InventoryCategory.findById(categoryId) as InventoryCategoryType;

    if (!category) {
        return code;
    }

    if (category.parentId == null) {
        return category.code + "-" + code;
    }

    return getCode(category.code + "-" + code, category.parentId);
}

const makeid = (length: number) => {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

const addInventory = catchAsyncErrors(async (req: NextRequest) => {
    const body = await req.json() as InventoryInput;
    let code = "";

    if (body.categoryId) {
        code = (await getCode("", body.categoryId)) + makeid(6);
    }

    const inventory = await Inventory.create({ ...body, code })
    return NextResponse.json({
        message: "Success"
    });
});

const getAllInventory = catchAsyncErrors(async (req: NextRequest) => {
    const page = Number(req.nextUrl.searchParams.get("page") ?? 1);
    const numberPerPage = Number(req.nextUrl.searchParams.get("numberPerPage") ?? 20);
    const search = req.nextUrl.searchParams.get("search") ?? "";
    const location = Number(req.nextUrl.searchParams.get("location"));
    let query = {} as any;
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

    if(location != 0){
        query.locations = location;
    }
    const inventory = await Inventory.find(query).skip((page - 1) * numberPerPage).limit(numberPerPage);
    const total = await Inventory.countDocuments();
    const pagination: Pagination = {
        numberPerPage,
        page,
        total
    }
    return NextResponse.json({
        inventory,
        pagination
    });
});

const getInventoryByCode = catchAsyncErrors(async (req: NextRequest) => {
    const code = req.nextUrl.searchParams.get("code") ?? "";
    let query = {
        code
    }
   
    const inventory = await Inventory.findOne(query)

    return NextResponse.json({
        result: inventory
    });
});

const updateInventory = catchAsyncErrors(async (req: NextRequest, { params }: { params: { id: string } }) => {
    const inventory = await Inventory.findById(params.id);

    if (!inventory) {
        throw new ErrorHandler("Inventory  not found", 404);
    }

    const body = await req.json() as InventoryInput;

    inventory.name = body.name;
    if (body.categoryId && body.categoryId != inventory.categoryId) {
        inventory.code = await getCode("", body.categoryId) + makeid(6);
    }

    inventory.categoryId = body.categoryId;
    inventory.categoryLookup = body.categoryLookup;
    inventory.description = body.description;
    inventory.qty = body.qty;
    inventory.condition = body.condition;
    inventory.status = body.status;
    inventory.borrowed = body.borrowed;
    inventory.broken = body.broken;
    inventory.locations = body.locations;

    await inventory.save();
    return NextResponse.json({
        message: "Success"
    });
});

const deleteInventory = catchAsyncErrors(async (req: NextRequest, { params }: { params: { id: string } }) => {
    const inventory = await Inventory.findById(params.id);

    if (!inventory) {
        throw new ErrorHandler("Inventory  not found", 404);
    }

    await inventory.deleteOne();
    return NextResponse.json({
        message: "Success"
    });
});

export {
    addInventory,
    getAllInventory,
    updateInventory,
    deleteInventory,
    getInventoryByCode
}
