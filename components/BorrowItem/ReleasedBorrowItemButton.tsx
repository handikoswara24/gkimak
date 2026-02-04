import { BorrowItemType } from "@/types/borrowItem";
import { FolderOutput } from "lucide-react";
import React from "react";
import { useQueryClient } from "react-query";
import { acceptClassName, rejectClassName } from "@/constants/cssConstant";
import { toast } from "react-toastify";
import { confirmDialog } from "primereact/confirmdialog";
import { useReleasedBorrowItem } from "@/service/borrow-item-query";
import { ProgressSpinner } from "primereact/progressspinner";
import { AxiosError } from "axios";

type ReleasedBorrowItemButtonProps = {
  data: BorrowItemType;
};

const ReleasedBorrowItemButton = ({ data }: ReleasedBorrowItemButtonProps) => {
  const { mutate: releaseBorrowItem, isLoading } = useReleasedBorrowItem();
  const queryClient = useQueryClient();
  const confirm = (id: string) => {
    confirmDialog({
      message: "Are you sure you want to released this borrow item?",
      header: "Confirmation",
      icon: "pi pi-exclamation-triangle",
      acceptClassName: acceptClassName,
      rejectClassName: rejectClassName,
      accept: () => {
        releaseBorrowItem(id, {
          onSuccess: () => {
            toast.success("Success released borrow item");
            queryClient.invalidateQueries(["allBorrowItems"]);
          },
          onError: (err: any) => {
            const error = err as AxiosError<{ errMessage: string }>;
            console.log(error);
            toast.error(
              error?.response?.data?.errMessage ??
                "Error when delete borrow item"
            );
          },
        });
      },
    });
  };
  return (
    <div onClick={() => confirm(data._id)} className="mr-3 cursor-pointer">
      {isLoading && <ProgressSpinner className="size-5 " />}
      {!isLoading && <FolderOutput className="size-5 text-green-500" />}
    </div>
  );
};

export default ReleasedBorrowItemButton;
