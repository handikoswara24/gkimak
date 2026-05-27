"use client";
import React from "react";
import OptionForm from "./OptionForm";
import { DefaultOptionInput } from "@/constants/optionConstant";
import FormCard from "../UI/FormCard";

const AddOption = () => {
  return (
    <FormCard title="Tambah Option" backHref="/admin/option">
      <OptionForm option={DefaultOptionInput} />
    </FormCard>
  );
};

export default AddOption;
