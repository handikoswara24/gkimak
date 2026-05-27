"use client";

import { BorrowItemInput } from "@/types/borrowItem";
import React, { useState } from "react";
import { useQueryClient } from "react-query";
import { useModalAction } from "../utils/ModalProvider";
import { useAddBorrowItem, useUpdateBorrowItem } from "@/service/borrow-item-query";
import { toast } from "react-toastify";
import { BorrowItemDefault } from "@/constants/borrowItemConstant";
import AutocompleteMember from "./AutocompleteMember";
import AutocompleteItem from "./AutocompleteItem";
import { Calendar } from "primereact/calendar";
import dayjs from "dayjs";
import Button from "../UI/Button";
import FormField from "../UI/FormField";

type BorrowItemFormProps = {
  id?: string;
  input: BorrowItemInput;
};

const BorrowItemForm = ({ id, input }: BorrowItemFormProps) => {
  const queryClient = useQueryClient();
  const { closeModal } = useModalAction();
  const [borrowItemData, setBorrowItemData] = useState<BorrowItemInput>(input);
  const { mutate: addBorrowItem, isLoading: loadingAdd } = useAddBorrowItem();
  const { mutate: updateBorrowItem, isLoading: loadingUpdate } = useUpdateBorrowItem(id ?? "");

  const isDisabled =
    !borrowItemData.memberId ||
    !borrowItemData.memberLookup ||
    !borrowItemData.purpose ||
    !borrowItemData.borrowDate ||
    borrowItemData.items.length === 0 ||
    !borrowItemData.returnDate;

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isDisabled) {
      toast.error("Mohon isi semua field yang wajib");
      return;
    }
    if (id) {
      updateBorrowItem(borrowItemData, {
        onSuccess: () => {
          toast.success("Peminjaman berhasil diperbarui!");
          queryClient.invalidateQueries({ queryKey: ["allBorrowItems"] });
          closeModal();
        },
        onError: (err: any) => { toast.error(err?.message ?? "Terjadi kesalahan"); },
      });
    } else {
      addBorrowItem(borrowItemData, {
        onSuccess: () => {
          toast.success("Peminjaman berhasil ditambahkan!");
          setBorrowItemData(structuredClone(BorrowItemDefault));
        },
        onError: (err: any) => { toast.error(err?.message ?? "Terjadi kesalahan"); },
      });
    }
  };

  return (
    <form className="admin-form space-y-5" onSubmit={onSubmit}>
      <FormField label="Peminjam" required>
        <AutocompleteMember input={borrowItemData} setBorrowItemData={setBorrowItemData} />
      </FormField>

      <FormField label="Barang yang Dipinjam" required hint="Tambah satu atau lebih barang">
        <AutocompleteItem input={borrowItemData} setBorrowItemData={setBorrowItemData} />
      </FormField>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <FormField label="Tanggal Pinjam" required>
          <Calendar
            className="w-full rounded-lg border border-stroke text-sm"
            inputClassName="admin-input"
            value={new Date(input.borrowDate)}
            onChange={(e) => setBorrowItemData({ ...input, borrowDate: e.value ?? new Date() })}
            dateFormat="dd/mm/yy"
            placeholder="Pilih tanggal pinjam"
          />
        </FormField>

        <FormField label="Tanggal Kembali" required>
          <Calendar
            className="w-full rounded-lg border border-stroke text-sm"
            inputClassName="admin-input"
            value={input.returnDate ? new Date(input.returnDate) : dayjs().add(1, "day").toDate()}
            onChange={(e) => setBorrowItemData({ ...input, returnDate: e.value ?? new Date() })}
            dateFormat="dd/mm/yy"
            placeholder="Pilih tanggal kembali"
          />
        </FormField>
      </div>

      <FormField label="Keperluan" htmlFor="purpose" required>
        <input
          id="purpose"
          className="admin-input"
          value={borrowItemData.purpose}
          onChange={(e) => setBorrowItemData({ ...borrowItemData, purpose: e.target.value })}
          autoComplete="off"
          placeholder="Masukkan tujuan peminjaman"
        />
      </FormField>

      <div className="pt-2">
        <Button
          type="submit"
          disabled={isDisabled}
          loading={loadingAdd || loadingUpdate}
          fullWidth
          size="lg"
        >
          {id ? "Simpan Perubahan" : "Tambah Peminjaman"}
        </Button>
      </div>
    </form>
  );
};

export default BorrowItemForm;
