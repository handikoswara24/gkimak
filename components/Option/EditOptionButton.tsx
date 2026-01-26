import { OptionsInput, OptionsType } from "@/types/options";
import React from "react";
import { useModalAction } from "../utils/ModalProvider";

type EditOptionButtonProps = {
  data: OptionsType;
};

const EditOptionButton = ({ data }: EditOptionButtonProps) => {
  const { openModal } = useModalAction();
  const optionInput: OptionsInput = {
    name: data.name,
    description: data.description,
    type: data.type,
  };
  return (
    <div className="mr-3">
      <i
        className="pi pi-user-edit text-lg text-blue-300 cursor-pointer"
        onClick={() =>
          openModal("OPTIONFORM", { id: data._id, option: optionInput })
        }
      ></i>
    </div>
  );
};

export default EditOptionButton;
