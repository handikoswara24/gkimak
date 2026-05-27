"use client"

import React, { useState } from 'react'
import { useQueryClient } from 'react-query';
import { useModalAction } from '../utils/ModalProvider';
import Button from '../UI/Button';
import { toast } from 'react-toastify';
import { InventoryCategoryInput } from '@/types/inventoryCategory';
import { useAddInventoryCategoryMutation, useUpdateInventoryCategoryMutation } from '@/service/inventorycategory-query';
import { DEFAULTINVENTORYCATEGORY } from '@/constants/inventoryCategoryConstant';
import AutocompleteParentInventoryCategory from './AutocompleteParentInventoryCategory';
import FormField from '../UI/FormField';

type InventoryCategoryFormProps = {
    id?: string,
    input: InventoryCategoryInput
}

const InventoryCategoryForm = ({ input, id }: InventoryCategoryFormProps) => {
    const queryClient = useQueryClient();
    const { closeModal } = useModalAction();
    const [inventoryCategoryData, setInventoryCategoryData] = useState<InventoryCategoryInput>(input);
    const { mutate: addinventorycategory, isLoading: loadingAdd } = useAddInventoryCategoryMutation();
    const { mutate: updateInventoryCategory, isLoading: loadingUpdate } = useUpdateInventoryCategoryMutation(id ?? "");

    const isDisabled = !inventoryCategoryData.name || !inventoryCategoryData.code;

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (isDisabled) {
            toast.error("Mohon isi semua field yang wajib");
            return;
        }
        if (id) {
            updateInventoryCategory(inventoryCategoryData, {
                onSuccess: () => {
                    toast.success("Kategori berhasil diperbarui!");
                    queryClient.invalidateQueries({ queryKey: ["allInventoryCategory"] })
                    closeModal();
                },
                onError: (err: any) => { toast.error(err?.message ?? "Terjadi kesalahan"); }
            })
        } else {
            addinventorycategory(inventoryCategoryData, {
                onSuccess: () => {
                    toast.success("Kategori berhasil ditambahkan!");
                    setInventoryCategoryData(DEFAULTINVENTORYCATEGORY);
                },
                onError: (err: any) => { toast.error(err?.message ?? "Terjadi kesalahan"); }
            })
        }
    }

    return (
        <form className="admin-form space-y-5" onSubmit={onSubmit}>
            <FormField label="Nama Kategori" htmlFor="name" required>
                <input
                    id="name"
                    className="admin-input"
                    value={inventoryCategoryData?.name}
                    onChange={(e) => setInventoryCategoryData({ ...inventoryCategoryData, name: e.target.value })}
                    autoComplete="off"
                    placeholder="Masukkan nama kategori"
                />
            </FormField>

            <FormField label="Kode Kategori" htmlFor="code" required>
                <input
                    id="code"
                    className="admin-input"
                    value={inventoryCategoryData?.code}
                    onChange={(e) => setInventoryCategoryData({ ...inventoryCategoryData, code: e.target.value })}
                    autoComplete="off"
                    placeholder="Contoh: FURN, ELEC"
                />
            </FormField>

            <FormField label="Kategori Parent" hint="Opsional — pilih jika ini adalah sub-kategori">
                <AutocompleteParentInventoryCategory
                    input={inventoryCategoryData}
                    setInventoryCategoryData={setInventoryCategoryData}
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
                    {id ? "Simpan Perubahan" : "Tambah Kategori"}
                </Button>
            </div>
        </form>
    )
}

export default InventoryCategoryForm
