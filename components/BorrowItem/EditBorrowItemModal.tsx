'use client'
import { BorrowItemInput } from "@/types/borrowItem";
import React from "react";
import BorrowItemForm from "./BorrowItemForm";
import EditModalShell from "../UI/EditModalShell";

type EditBorrowItemModalProps = {
  id: string;
  borrowItem: BorrowItemInput;
};

const EditBorrowItemModal = ({ id, borrowItem }: EditBorrowItemModalProps) => {
  return (
    <EditModalShell title="Edit Peminjaman" maxWidth="lg">
      <BorrowItemForm id={id} input={borrowItem} />
    </EditModalShell>
  );
};

export default EditBorrowItemModal;
