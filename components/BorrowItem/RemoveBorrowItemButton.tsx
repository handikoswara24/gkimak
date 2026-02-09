import { useDeleteBorrowItem } from "@/service/borrow-item-query";
import { BorrowItemType } from "@/types/borrowItem";
import { confirmDialog } from "primereact/confirmdialog";
import React from "react";
import { useQueryClient } from "react-query";
import { acceptClassName, rejectClassName } from "@/constants/cssConstant";
import { toast } from "react-toastify";

type RemoveBorrowItemButtonProps = {
  data: BorrowItemType;
};

const RemoveBorrowItemButton = ({ data }: RemoveBorrowItemButtonProps) => {
  const { mutate: deleteBorrowItem, isLoading } = useDeleteBorrowItem();
  const queryClient = useQueryClient();
  const confirm = (id: string) => {
    if (isLoading) {
      return;
    }
    confirmDialog({
      message: "Are you sure you want to delete this borrow item?",
      header: "Confirmation",
      icon: "pi pi-exclamation-triangle",
      acceptClassName: acceptClassName,
      rejectClassName: rejectClassName,
      accept: () => {
        deleteBorrowItem(id, {
          onSuccess: () => {
            toast.success("Success delete borrow item");
            queryClient.invalidateQueries(["allBorrowItems"]);
          },
          onError: (err) => {
            toast.error("Error when delete borrow item");
          },
        });
      },
    });
  };
  return (
    <div>
      <div className="hidden border border-blue-500 outline-none text-blue-500 bg-white px-4 ml-3 py-2 !rounded-xl"></div>
      <i
        className="pi pi-trash text-lg text-pink-400 cursor-pointer"
        onClick={() => {
          confirm(data._id);
        }}
      ></i>
    </div>
  );
};

export default RemoveBorrowItemButton;
