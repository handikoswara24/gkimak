import { OptionsType } from "@/types/options";
import React from "react";
import EditOptionButton from "./EditOptionButton";
import RemoveOptionButton from "./RemoveOptionButton";

type OptionButtonsProps = {
  option: OptionsType;
};

const OptionButtons = ({ option }: OptionButtonsProps) => {
  return (
    <div className="flex flex-row">
      <EditOptionButton data={option} />
      <RemoveOptionButton data={option} />
    </div>
  );
};

export default OptionButtons;
