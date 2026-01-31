"use client";
import React from "react";
import BorrowItemForm from "./BorrowItemForm";
import { BorrowItemDefault } from "@/constants/borrowItemConstant";

const AddBorrowItem = () => {
  return (
    <div>
      <h1 className="mb-4 text-xl font-semibold">Add Borrow Item</h1>
      <BorrowItemForm input={BorrowItemDefault} />
    </div>
  );
};

export default AddBorrowItem;
