"use client";

import React, { useState } from "react";
import { useQueryClient } from "react-query";
import { useModalAction } from "../utils/ModalProvider";
import Button from "../UI/Button";
import { toast } from "react-toastify";
import { InventoryInput } from "@/types/inventory";
import { INVENTORYDEFAULT, Status } from "@/constants/inventoryConstant";
import { useAddInventoryMutation, useUpdateInventoryMutation } from "@/service/inventory-query";
import AutocompleteInventoryCategory from "./AutocompleteInventoryCategory";
import AutocompleteLocation from "./AutocompleteLocation";
import FormField from "../UI/FormField";

type InventoryFormProps = {
  id?: string;
  input: InventoryInput;
};

const InventoryForm = ({ id, input }: InventoryFormProps) => {
  const queryClient = useQueryClient();
  const { closeModal } = useModalAction();
  const [inventoryData, setInventoryData] = useState<InventoryInput>(input);
  const { mutate: addinventory, isLoading: loadingAdd } = useAddInventoryMutation();
  const { mutate: updateInventory, isLoading: loadingUpdate } = useUpdateInventoryMutation(id ?? "");

  const isDisabled = !inventoryData.name || !inventoryData.categoryId || !inventoryData.categoryLookup;

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isDisabled) {
      toast.error("Mohon isi semua field yang wajib");
      return;
    }
    if (id) {
      updateInventory(inventoryData, {
        onSuccess: () => {
          toast.success("Inventaris berhasil diperbarui!");
          queryClient.invalidateQueries({ queryKey: ["allInventory"] });
          closeModal();
        },
        onError: (err: any) => { toast.error(err?.message ?? "Terjadi kesalahan"); },
      });
    } else {
      addinventory(inventoryData, {
        onSuccess: () => {
          toast.success("Inventaris berhasil ditambahkan!");
          setInventoryData(INVENTORYDEFAULT);
        },
        onError: (err: any) => { toast.error(err?.message ?? "Terjadi kesalahan"); },
      });
    }
  };

  return (
    <form className="admin-form space-y-5" onSubmit={onSubmit}>
      <FormField label="Nama Barang" htmlFor="name" required>
        <input
          id="name"
          className="admin-input"
          value={inventoryData?.name}
          onChange={(e) => setInventoryData({ ...inventoryData, name: e.target.value })}
          autoComplete="off"
          placeholder="Masukkan nama barang"
        />
      </FormField>

      <FormField label="Deskripsi" htmlFor="description">
        <textarea
          id="description"
          className="admin-input resize-none"
          rows={3}
          value={inventoryData?.description}
          onChange={(e) => setInventoryData({ ...inventoryData, description: e.target.value })}
          placeholder="Masukkan deskripsi barang"
        />
      </FormField>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <FormField label="Kategori" required>
          <AutocompleteInventoryCategory input={inventoryData} setInventoryData={setInventoryData} />
        </FormField>

        <FormField label="Lokasi">
          <AutocompleteLocation input={inventoryData} setInventoryData={setInventoryData} />
        </FormField>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <FormField label="Jumlah" htmlFor="qty" required>
          <input
            id="qty"
            type="number"
            min={1}
            className="admin-input"
            value={inventoryData?.qty?.toString()}
            onChange={(e) => setInventoryData({ ...inventoryData, qty: e.target.valueAsNumber })}
          />
        </FormField>

        <FormField label="Status" htmlFor="status" required>
          <select
            id="status"
            className="admin-input"
            value={inventoryData.status ?? 1}
            onChange={(e) => setInventoryData({ ...inventoryData, status: Number(e.target.value) })}
          >
            {Status.map((s) => (
              <option key={s.value} value={s.value}>{s.label}</option>
            ))}
          </select>
        </FormField>
      </div>

      <div className="pt-2">
        <Button
          type="submit"
          disabled={isDisabled}
          loading={loadingAdd || loadingUpdate}
          fullWidth
          size="lg"
        >
          {id ? "Simpan Perubahan" : "Tambah Inventaris"}
        </Button>
      </div>
    </form>
  );
};

export default InventoryForm;
