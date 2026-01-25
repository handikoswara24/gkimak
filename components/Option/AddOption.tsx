"use client";
import React from "react";
import OptionForm from "./OptionForm";
import { DefaultOptionInput } from "@/constants/optionConstant";

const AddOption = () => {
  return (
    <div>
      <h1 className="mb-4 text-xl font-semibold">Add Option</h1>
      <OptionForm option={DefaultOptionInput} />
    </div>
  );
};

export default AddOption;
