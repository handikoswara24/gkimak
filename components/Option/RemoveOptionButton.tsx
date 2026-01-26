import React from "react";
import { acceptClassName, rejectClassName } from "@/constants/cssConstant";
import { OptionsType } from "@/types/options";
import { useDeleteOption } from "@/service/option-query";
import { useQueryClient } from "react-query";
import { toast } from "react-toastify";
import { confirmDialog } from "primereact/confirmdialog";

type RemoveOptionButtonProps = {
  data: OptionsType;
};

const RemoveOptionButton = ({ data }: RemoveOptionButtonProps) => {
  const { mutate: deleteOption } = useDeleteOption();
  const queryClient = useQueryClient();
  const confirm = (id: string) => {
    confirmDialog({
      message: "Are you sure you want to delete this option?",
      header: "Confirmation",
      icon: "pi pi-exclamation-triangle",
      acceptClassName: acceptClassName,
      rejectClassName: rejectClassName,
      accept: () => {
        deleteOption(id, {
          onSuccess: () => {
            toast.success("Success delete option");
            queryClient.invalidateQueries(["allOptions"]);
          },
          onError: (err) => {
            toast.error("Error when delete option");
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

export default RemoveOptionButton;
