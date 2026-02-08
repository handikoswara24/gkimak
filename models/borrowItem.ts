import { IBorrowItemModel } from "@/types/borrowItem";
import { LookupDefault } from "@/types/common";
import mongoose, { Schema } from "mongoose";

const borrowItem = new mongoose.Schema(
  {
    memberId: {
      type: Schema.Types.ObjectId,
    },
    memberLookup: { ...LookupDefault },
    borrowDate: {
      type: Date,
    },
    returnDate: {
      type: Date,
    },
    actualReturnDate: {
      type: Date
    },
    purpose: {
      type: String,
    },
    status: {
      type: Number,
    },
    borrowNumber: {
      type: String,
    },
    items: [
      {
        itemId: {
          type: Schema.Types.ObjectId,
        },
        itemLookup: { ...LookupDefault },
        quantity: {
          type: Number,
        },
        maxQty: {
          type: Number,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

const BorrowItem =
  mongoose.models.BorrowItem ??
  mongoose.model<IBorrowItemModel>("BorrowItem", borrowItem);

export default BorrowItem;
