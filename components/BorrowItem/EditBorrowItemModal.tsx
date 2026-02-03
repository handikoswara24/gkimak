import { BorrowItemInput } from "@/types/borrowItem";
import React from "react";
import BorrowItemForm from "./BorrowItemForm";

type EditBorrowItemModalProps = {
  id: string;
  borrowItem: BorrowItemInput;
};

const EditBorrowItemModal = ({ id, borrowItem }: EditBorrowItemModalProps) => {
  return (
    <div className="max-w-xl mx-auto">
      <h1 className="text-xl font-semibold">Edit Borrow Item</h1>
      <div>
        <BorrowItemForm id={id} input={borrowItem} />
      </div>
    </div>
  );
};

export default EditBorrowItemModal;
