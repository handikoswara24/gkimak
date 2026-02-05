import { BorrowItemType } from "@/types/borrowItem";
import React from "react";
import WAIcon from "../Icons/WAIcon";

type WABorrowItemButtonProps = {
  data: BorrowItemType;
};

const WABorrowItemButton = ({ data }: WABorrowItemButtonProps) => {
  return (
    <div className="cursor-pointer relative -top-1.5">
      <WAIcon className="size-7 ml-3 text-green-400" />
    </div>
  );
};

export default WABorrowItemButton;
