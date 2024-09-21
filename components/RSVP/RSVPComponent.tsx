'use client'

import { RSVP } from '@/type/rsvp'
import React, { useState } from 'react'
import { FloatLabel } from 'primereact/floatlabel'
import { InputText } from 'primereact/inputtext'
import Button from '../UI/Button'
import { useAddRSVP } from '@/service/rsvp-query'
import { toast } from 'react-toastify'

const RSVPComponent = () => {
    const [rsvp, setRSVP] = useState<RSVP>({ jumlahTamu: 1, nama: "" });
    const { mutate, isLoading } = useAddRSVP();
    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        mutate(rsvp, {
            onSuccess: (data) => {
                if (data.success) {
                    toast.success("Terima kasih");
                    setRSVP({ jumlahTamu: 1, nama: "" });
                }
                else {
                    toast.error(data.message);
                }
            },
            onError: (err: any) => {
                toast.error("An Error Occured");
            }
        })
    }

    const onChangeJumlahTamu = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value.startsWith("0") || rsvp.jumlahTamu == 0) {
            e.target.value = e.target.value.replace("0", "");
        }

        if (e.target.value != null || e.target.value != undefined || e.target.value != "") {
            setRSVP({ ...rsvp, jumlahTamu: Number(e.target.value) })
        }
    }
    return (
        <form onSubmit={onSubmit} className='pt-10'>
            <div className='text-center text-2xl mb-4'>
                RSVP
            </div>
            <div className='flex justify-center w-full'>
                <div className='w-96 space-y-10'>
                    <FloatLabel>
                        <InputText className='rounded-xl w-full text-sm p-2 text-black border border-slate-700' autoComplete='off' id="nama" value={rsvp.nama}
                            onChange={(e) => setRSVP({ ...rsvp, nama: e.target.value })} />
                        <label htmlFor="nama" className='-mt-[0.35rem]'>Nama</label>
                    </FloatLabel>
                    <FloatLabel>
                        <InputText type='number' keyfilter={"int"} className='rounded-xl w-full text-sm p-2 text-black border border-slate-700' autoComplete='off' id="jumlahTamu" value={rsvp.jumlahTamu?.toString() == "0" ? "" : rsvp.jumlahTamu?.toString()}
                            onChange={(e) => onChangeJumlahTamu(e)} />
                        <label htmlFor="jumlahTamu" className='-mt-[0.35rem]'>Jumlah Tamu</label>
                    </FloatLabel>
                    <div className='mt-4'>
                        <Button type='submit' disabled={rsvp.jumlahTamu === null || !rsvp.nama || rsvp.jumlahTamu == undefined || isLoading}
                            loading={isLoading}
                            className='w-full border border-blue-400 text-blue-400 py-2 rounded-xl disabled:border-slate-300 disabled:text-slate-300 disabled:hover:bg-transparent disabled:hover:text-slate-300 hover:text-white hover:bg-blue-400'>
                            Submit
                        </Button>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default RSVPComponent