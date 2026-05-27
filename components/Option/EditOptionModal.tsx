'use client'
import { OptionsInput } from "@/types/options";
import React from "react";
import OptionForm from "./OptionForm";
import EditModalShell from "../UI/EditModalShell";

type EditOptionModalProps = {
  id: string;
  option: OptionsInput;
};

const EditOptionModal = ({ id, option }: EditOptionModalProps) => {
  return (
    <EditModalShell title="Edit Option">
      <OptionForm id={id} option={option} />
    </EditModalShell>
  );
};

export default EditOptionModal;
