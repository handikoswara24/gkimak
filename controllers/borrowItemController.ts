import catchAsyncErrors from "@/middlewares/catchAsyncErrors";
import { NextRequest, NextResponse } from "next/server";
import ErrorHandler from "@/utils/errorHandler";
import { Pagination } from "@/types/pagination";
import BorrowItem from "@/models/borrowItem";
import { BorrowItemInput } from "@/types/borrowItem";
import generateRandomString from "@/utils/generateRandomString";

const addBorrowItem = catchAsyncErrors(async (req: NextRequest) => {
  const body = (await req.json()) as BorrowItemInput;

  const borrowNumber =
    "GKIM-AK-" +
    new Date().getFullYear() +
    "-" +
    (new Date().getMonth() + 1) +
    "-" +
    new Date().getDate() +
    "-" +
    generateRandomString(4);

  const borrowItem = await BorrowItem.create({
    memberId: body.memberId,
    memberLookup: body.memberLookup,
    borrowDate: body.borrowDate,
    returnDate: body.returnDate,
    items: body.items,
    purpose: body.purpose,
    status: 1,
    borrowNumber,
  });
  return NextResponse.json({
    message: "Success",
  });
});

const getAllBorrowItem = catchAsyncErrors(async (req: NextRequest) => {
  const page = Number(req.nextUrl.searchParams.get("page") ?? 1);
  const numberPerPage = Number(
    req.nextUrl.searchParams.get("numberPerPage") ?? 20
  );
  const search = req.nextUrl.searchParams.get("search") ?? "";
  const status = Number(req.nextUrl.searchParams.get("status") ?? 0);
  let query = {} as any;
  if (search) {
    query = {
      $or: [
        {
          borrowNumber: {
            $regex: search,
            $options: "i",
          },
        },
      ],
    };
  }

  if (status != 0) {
    query.status = status;
  }
  const borrowItem = await BorrowItem.find(query)
    .skip((page - 1) * numberPerPage)
    .limit(numberPerPage);
  const total = await BorrowItem.find(query).countDocuments();
  const pagination: Pagination = {
    numberPerPage,
    page,
    total,
  };
  return NextResponse.json({
    borrowItem,
    pagination,
  });
});

const updateBorrowItem = catchAsyncErrors(
  async (req: NextRequest, { params }: { params: { id: string } }) => {
    const borrowItem = await BorrowItem.findById(params.id);

    if (!borrowItem) {
      throw new ErrorHandler("Borrow Item not found", 404);
    }

    const body = (await req.json()) as BorrowItemInput;

    borrowItem.memberId = body.memberId;
    borrowItem.memberLookup = body.memberLookup;
    borrowItem.borrowDate = body.borrowDate;
    borrowItem.returnDate = body.returnDate;
    borrowItem.items = body.items;
    borrowItem.purpose = body.purpose;

    await borrowItem.save();
    return NextResponse.json({
      message: "Success",
    });
  }
);

const deleteBorrowItem = catchAsyncErrors(
  async (req: NextRequest, { params }: { params: { id: string } }) => {
    const borrowItem = await BorrowItem.findById(params.id);

    if (!borrowItem) {
      throw new ErrorHandler("Borrow Item not found", 404);
    }

    await borrowItem.deleteOne();
    return NextResponse.json({
      message: "Success",
    });
  }
);

export { addBorrowItem, getAllBorrowItem, updateBorrowItem, deleteBorrowItem };
