import { BorrowItemInput, BorrowItemType } from "@/types/borrowItem";
import React from "react";
import { useModalAction } from "../utils/ModalProvider";

type EditBorrowItemButtonProps = {
  data: BorrowItemType;
};

const EditBorrowItemButton = ({ data }: EditBorrowItemButtonProps) => {
  const { openModal } = useModalAction();
  const borrowItemInput: BorrowItemInput = {
    memberId: data.memberId,
    memberLookup: data.memberLookup,
    items: data.items,
    borrowDate: data.borrowDate,
    returnDate: data.returnDate,
    purpose: data.purpose,
  };
  return (
    <div className="mr-3">
      <i
        className="pi pi-user-edit text-lg text-blue-300 cursor-pointer"
        onClick={() =>
          openModal("BORROWITEMFORM", {
            id: data._id,
            borrowItem: borrowItemInput,
          })
        }
      ></i>
    </div>
  );
};

export default EditBorrowItemButton;
