import { BorrowItemType } from "@/types/borrowItem";
import React from "react";
import WAIcon from "../Icons/WAIcon";
import { getJemaatById } from "@/service/jemaat-query";
import { toast } from "react-toastify";

type WABorrowItemButtonProps = {
  data: BorrowItemType;
};

const WABorrowItemButton = ({ data }: WABorrowItemButtonProps) => {
  const _toast = toast;
  const onWA_Click = async () => {
    const jemaatData = await getJemaatById(data.memberId);

    if (!jemaatData.jemaat.telepon) {
      _toast.error("No Phone Number");
      return;
    }

    let tlp = jemaatData.jemaat.telepon;

    if (tlp.startsWith("0")) {
      tlp = tlp.replace("0", "62");
    }
    window.open(`https://wa.me/${tlp}`);
  };
  return (
    <div
      className="cursor-pointer relative -top-1.5"
      onClick={() => onWA_Click()}
    >
      <WAIcon className="size-7 ml-3 text-green-400" />
    </div>
  );
};

export default WABorrowItemButton;
