import { BorrowItemType } from "@/types/borrowItem";
import React from "react";
import EditBorrowItemButton from "./EditBorrowItemButton";
import RemoveBorrowItemButton from "./RemoveBorrowItemButton";

type BorrowItemButtonsProps = {
  data: BorrowItemType;
};

const BorrowItemButtons = ({ data }: BorrowItemButtonsProps) => {
  return (
    <div className="flex flex-row">
      <EditBorrowItemButton data={data} />
      <RemoveBorrowItemButton data={data} />
    </div>
  );
};

export default BorrowItemButtons;
