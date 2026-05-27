"use client";

import { OptionsInput } from "@/types/options";
import React, { useState } from "react";
import { useQueryClient } from "react-query";
import { useModalAction } from "../utils/ModalProvider";
import { useAddOption, useUpdateOption } from "@/service/option-query";
import { toast } from "react-toastify";
import { DefaultOptionInput, OptionTypeList } from "@/constants/optionConstant";
import Button from "../UI/Button";
import FormField from "../UI/FormField";

type OptionFormProps = {
  id?: string;
  option: OptionsInput;
};

const OptionForm = ({ id, option }: OptionFormProps) => {
  const queryClient = useQueryClient();
  const { closeModal } = useModalAction();
  const [optionData, setOptionData] = useState(option);
  const { mutate: addOption, isLoading } = useAddOption();
  const { mutate: updateOption, isLoading: isLoadingUpdate } = useUpdateOption(id ?? "");

  const isDisabled = !optionData.name || !optionData.type;

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isDisabled) {
      toast.error("Mohon isi semua field yang wajib");
      return;
    }
    if (id) {
      updateOption(optionData, {
        onSuccess: () => {
          toast.success("Option berhasil diperbarui!");
          queryClient.invalidateQueries({ queryKey: ["allOptions"] });
          closeModal();
        },
        onError: (err: any) => { toast.error(err?.message ?? "Terjadi kesalahan"); },
      });
    } else {
      addOption(optionData, {
        onSuccess: () => {
          toast.success("Option berhasil ditambahkan!");
          setOptionData(DefaultOptionInput);
        },
        onError: (err: any) => { toast.error(err?.message ?? "Terjadi kesalahan"); },
      });
    }
  };

  return (
    <form className="admin-form space-y-5" onSubmit={onSubmit}>
      <FormField label="Nama Option" htmlFor="name" required>
        <input
          id="name"
          className="admin-input"
          value={optionData?.name}
          onChange={(e) => setOptionData({ ...optionData, name: e.target.value })}
          autoComplete="off"
          placeholder="Masukkan nama option"
        />
      </FormField>

      <FormField label="Tipe" htmlFor="type" required>
        <select
          id="type"
          className="admin-input"
          value={optionData?.type ?? ""}
          onChange={(e) => setOptionData({ ...optionData, type: e.target.value })}
        >
          <option value="">Pilih Tipe</option>
          {OptionTypeList.map((t) => (
            <option key={t.value} value={t.value}>{t.label}</option>
          ))}
        </select>
      </FormField>

      <FormField label="Deskripsi" htmlFor="description">
        <input
          id="description"
          className="admin-input"
          value={optionData?.description}
          onChange={(e) => setOptionData({ ...optionData, description: e.target.value })}
          autoComplete="off"
          placeholder="Masukkan deskripsi (opsional)"
        />
      </FormField>

      <div className="pt-2">
        <Button
          type="submit"
          disabled={isDisabled}
          loading={isLoading || isLoadingUpdate}
          fullWidth
          size="lg"
        >
          {id ? "Simpan Perubahan" : "Tambah Option"}
        </Button>
      </div>
    </form>
  );
};

export default OptionForm;
