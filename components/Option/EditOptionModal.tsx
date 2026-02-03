import { OptionsInput } from "@/types/options";
import React from "react";
import OptionForm from "./OptionForm";

type EditOptionModalProps = {
  id: string;
  option: OptionsInput;
};

const EditOptionModal = ({ id, option }: EditOptionModalProps) => {
  return (
    <div className="max-w-xl mx-auto">
      <h1 className="text-xl font-semibold">Edit Option</h1>
      <div>
        <OptionForm id={id} option={option} />
      </div>
    </div>
  );
};

export default EditOptionModal;
