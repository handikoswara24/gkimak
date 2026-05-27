"use client"

import React, { useState } from 'react'
import { useQueryClient } from 'react-query';
import { useModalAction } from '../utils/ModalProvider';
import { JemaatInput } from '@/types/jemaat';
import { useAddJemaatMutation, useUpdateJemaatMutation } from '@/service/jemaat-query';
import Button from '../UI/Button';
import { toast } from 'react-toastify';
import { DefaultJemaatInput } from '@/constants/jemaatConstant';
import FormField from '../UI/FormField';

type JemaatFormProps = {
    id?: string,
    input: JemaatInput
}

const JemaatForm = ({ id, input }: JemaatFormProps) => {
    const queryClient = useQueryClient();
    const { closeModal } = useModalAction();
    const [jemaatData, setJemaatData] = useState<JemaatInput>(input);
    const { mutate: addJemaat, isLoading: loadingAdd } = useAddJemaatMutation();
    const { mutate: updateJemaat, isLoading: loadingUpdate } = useUpdateJemaatMutation(id ?? "");

    const isDisabled = !jemaatData.nama || !jemaatData.nomorAnggota || !jemaatData.telepon;

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (isDisabled) {
            toast.error("Mohon isi semua field yang wajib");
            return;
        }
        if (id) {
            updateJemaat(jemaatData, {
                onSuccess: () => {
                    toast.success("Jemaat berhasil diperbarui!");
                    queryClient.invalidateQueries({ queryKey: ["allJemaat"] })
                    closeModal();
                },
                onError: (err: any) => { toast.error(err?.message ?? "Terjadi kesalahan"); }
            })
        } else {
            addJemaat(jemaatData, {
                onSuccess: () => {
                    toast.success("Jemaat berhasil ditambahkan!");
                    setJemaatData(DefaultJemaatInput);
                },
                onError: (err: any) => { toast.error(err?.message ?? "Terjadi kesalahan"); }
            })
        }
    }

    return (
        <form className="admin-form space-y-5" onSubmit={onSubmit}>
            <FormField label="Nomor Anggota" htmlFor="nomorAnggota" required>
                <input
                    id="nomorAnggota"
                    className="admin-input"
                    value={jemaatData?.nomorAnggota}
                    onChange={(e) => setJemaatData({ ...jemaatData, nomorAnggota: e.target.value })}
                    autoComplete="off"
                    placeholder="Contoh: GKI-001"
                />
            </FormField>

            <FormField label="Nama Lengkap" htmlFor="nama" required>
                <input
                    id="nama"
                    className="admin-input"
                    value={jemaatData?.nama}
                    onChange={(e) => setJemaatData({ ...jemaatData, nama: e.target.value })}
                    autoComplete="off"
                    placeholder="Masukkan nama lengkap"
                />
            </FormField>

            <FormField label="Nomor Telepon" htmlFor="telepon" required>
                <input
                    id="telepon"
                    className="admin-input"
                    value={jemaatData?.telepon}
                    onChange={(e) => setJemaatData({ ...jemaatData, telepon: e.target.value })}
                    autoComplete="off"
                    placeholder="Contoh: 08123456789"
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
                    {id ? "Simpan Perubahan" : "Tambah Jemaat"}
                </Button>
            </div>
        </form>
    )
}

export default JemaatForm
