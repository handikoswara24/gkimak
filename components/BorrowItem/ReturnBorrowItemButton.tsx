import { acceptClassName, rejectClassName } from "@/constants/cssConstant";
import { useReturnedBorrowItem } from "@/service/borrow-item-query";
import { BorrowItemType } from "@/types/borrowItem";
import { AxiosError } from "axios";
import { FolderInput } from "lucide-react";
import { confirmDialog } from "primereact/confirmdialog";
import { ProgressSpinner } from "primereact/progressspinner";
import React from "react";
import { useQueryClient } from "react-query";
import { toast } from "react-toastify";

type ReturnBorrowItemButtonProps = {
  data: BorrowItemType;
};

const ReturnBorrowItemButton = ({ data }: ReturnBorrowItemButtonProps) => {
  const { mutate: returnBorrowItem, isLoading } = useReturnedBorrowItem();
  const queryClient = useQueryClient();
  const confirm = (id: string) => {
    confirmDialog({
      message: "Are you sure you want to returned this borrow item?",
      header: "Confirmation",
      icon: "pi pi-exclamation-triangle",
      acceptClassName: acceptClassName,
      rejectClassName: rejectClassName,
      accept: () => {
        returnBorrowItem(
          { id, actualReturnDate: new Date(new Date().setHours(0, 0, 0, 0)) },
          {
            onSuccess: () => {
              toast.success("Success returned");
              queryClient.invalidateQueries(["allBorrowItems"]);
            },
            onError: (err: any) => {
              const error = err as AxiosError<{ errMessage: string }>;
              console.log(error);
              toast.error(
                error?.response?.data?.errMessage ??
                  "Error when return borrow item"
              );
            },
          }
        );
      },
    });
  };
  return (
    <div onClick={() => confirm(data._id)} className="cursor-pointer">
      {isLoading && <ProgressSpinner className="size-5 " />}
      {!isLoading && <FolderInput className="size-5 text-green-500" />}
    </div>
  );
};

export default ReturnBorrowItemButton;
