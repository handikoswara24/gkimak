"use client";
import React from "react";
import BorrowItemForm from "./BorrowItemForm";
import { BorrowItemDefault } from "@/constants/borrowItemConstant";
import FormCard from "../UI/FormCard";

const AddBorrowItem = () => {
  return (
    <FormCard title="Tambah Peminjaman" backHref="/admin/borrowitem" maxWidth="lg">
      <BorrowItemForm input={structuredClone(BorrowItemDefault)} />
    </FormCard>
  );
};

export default AddBorrowItem;
