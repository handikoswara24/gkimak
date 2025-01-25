"use client"

import React, { useState } from 'react'
import { useQueryClient } from 'react-query';
import { useModalAction } from '../utils/ModalProvider';
import { JemaatInput } from '@/types/jemaat';
import { useAddJemaatMutation, useUpdateJemaatMutation } from '@/service/jemaat-query';
import { FloatLabel } from 'primereact/floatlabel';
import { InputText } from 'primereact/inputtext';
import Button from '../UI/Button';
import { toast } from 'react-toastify';
import { DefaultJemaatInput } from '@/constants/jemaatConstant';

type JemaatFromProps = {
    id?: string,
    input: JemaatInput
}

const JemaatForm = ({ id, input }: JemaatFromProps) => {
    const queryClient = useQueryClient();
    const { closeModal } = useModalAction();
    const [jemaatData, setJemaatData] = useState<JemaatInput>(input);
    const { mutate: addJemaat, isLoading: loadingAdd } = useAddJemaatMutation();
    const { mutate: updateJemaat, isLoading: loadingUpdate } = useUpdateJemaatMutation(id ?? "");
    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!jemaatData.nama || !jemaatData.nomorAnggota || !jemaatData.telepon) {
            toast.error("Please Fill All Fields");
            return;
        }

        if (id) {
            updateJemaat(jemaatData, {
                onSuccess: (data) => {
                    toast.success("Success update jemaat!");
                    queryClient.invalidateQueries({ queryKey: ["allJemaat"] })
                    closeModal();
                },
                onError: (err: any) => {
                    toast.error(err?.message ?? "An Error occured")
                }
            })
        }
        else {
            addJemaat(jemaatData, {
                onSuccess: (data) => {
                    toast.success("Success create jemaat!");
                    setJemaatData(DefaultJemaatInput);
                },
                onError: (err: any) => {
                    toast.error(err?.message ?? "An Error occured")
                }
            })
        }
    }
    return (
        <div>
            {!id && (
                <div className='h-3 font-semibold mb-10'>Jemaat</div>
            )}
            <form className='mt-12 space-y-8 text-xs' onSubmit={onSubmit}>
                <div className=''>
                    <FloatLabel>
                        <InputText className='rounded-xl w-full text-xs border border-slate-300 px-4 py-3' id="nomorAnggota" autoComplete='off'
                            value={jemaatData?.nomorAnggota} onChange={(e) => setJemaatData({ ...jemaatData, nomorAnggota: e.target.value })} />
                        <label htmlFor="nomorAnggota" className='-mt-[0.35rem]'>Nomor Anggota</label>
                    </FloatLabel>
                </div>
                <div className=''>
                    <FloatLabel>
                        <InputText className='rounded-xl w-full text-xs border border-slate-300 px-4 py-3' id="nama" autoComplete='off'
                            value={jemaatData?.nama} onChange={(e) => setJemaatData({ ...jemaatData, nama: e.target.value })} />
                        <label htmlFor="nama" className='-mt-[0.35rem]'>Nama</label>
                    </FloatLabel>
                </div>
                <div className=''>
                    <FloatLabel>
                        <InputText className='rounded-xl w-full text-xs border border-slate-300 px-4 py-3' id="telepon" autoComplete='off'
                            value={jemaatData?.telepon} onChange={(e) => setJemaatData({ ...jemaatData, telepon: e.target.value })} />
                        <label htmlFor="telepon" className='-mt-[0.35rem]'>Telepon</label>
                    </FloatLabel>
                </div>
                <div>
                    <Button type='submit' disabled={!jemaatData.nama || !jemaatData.nomorAnggota || !jemaatData.telepon || loadingUpdate || loadingAdd}
                        loading={loadingAdd || loadingUpdate}
                        className='w-full border border-blue-400 text-blue-400 py-2 rounded-xl disabled:border-slate-300 disabled:text-slate-300 disabled:hover:bg-transparent disabled:hover:text-slate-300 hover:text-white hover:bg-blue-400'>
                        Submit
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default JemaatForm