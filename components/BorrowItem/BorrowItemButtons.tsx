import { BorrowItemType } from "@/types/borrowItem";
import React from "react";
import EditBorrowItemButton from "./EditBorrowItemButton";
import RemoveBorrowItemButton from "./RemoveBorrowItemButton";
import ReleasedBorrowItemButton from "./ReleasedBorrowItemButton";
import ReturnBorrowItemButton from "./ReturnBorrowItemButton";
import WABorrowItemButton from "./WABorrowItemButton";

type BorrowItemButtonsProps = {
  data: BorrowItemType;
};

const BorrowItemButtons = ({ data }: BorrowItemButtonsProps) => {
  return (
    <div className="flex flex-row">
      {data.status == 1 && (
        <>
          <ReleasedBorrowItemButton data={data} />
          <EditBorrowItemButton data={data} />
          <RemoveBorrowItemButton data={data} />
        </>
      )}
      {data.status == 2 && (
        <>
          <ReturnBorrowItemButton data={data} />
          <WABorrowItemButton data={data} />
        </>
      )}
    </div>
  );
};

export default BorrowItemButtons;
