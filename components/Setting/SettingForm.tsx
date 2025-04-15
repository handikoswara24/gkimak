'use client'

import { useAddUpdateSetting, useGetSetting } from '@/service/setting-query'
import { SettingType } from '@/types/setting';
import { FloatLabel } from 'primereact/floatlabel';
import { InputText } from 'primereact/inputtext';
import React, { useMemo, useRef, useState } from 'react'
import { useQueryClient } from 'react-query';
import { toast } from 'react-toastify';
import Button from '../UI/Button';
import HtmlEditor from '../UI/HtmlEditor';
import { InputTextarea } from 'primereact/inputtextarea';

type SettingFormProps = {
    data: SettingType
}

const SettingForm = ({ data }: SettingFormProps) => {
    const queryClient = useQueryClient();
    const [input, setInput] = useState(data);
    const { mutate: addUpdateSetting, isLoading } = useAddUpdateSetting();

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        addUpdateSetting(input, {
            onSuccess: () => {
                toast.success("Success update settings!");
                queryClient.invalidateQueries({ queryKey: ["setting"] })
            },
            onError: (err: any) => {
                toast.error(err?.message ?? "An Error occured")
            }
        })
    }
    return (
        <form onSubmit={onSubmit} className='mt-8'>
            <div className='space-y-8'>
                <div className=''>
                    <FloatLabel>
                        <InputText className='rounded-xl w-full text-xs border border-slate-300 px-4 py-3' id="watchIdLive"
                            value={input.watchIdLive}
                            onChange={(e) => setInput({ ...input, watchIdLive: e.target.value })} autoComplete='off' />
                        <label htmlFor="watchIdLive" className='-mt-[0.35rem] text-xs'>Watch Id Live</label>
                    </FloatLabel>
                </div>
                <div className=''>
                    <FloatLabel>
                        <InputText className='rounded-xl w-full text-xs border border-slate-300 px-4 py-3' id="welcomeText"
                            value={input.welcomeText}
                            onChange={(e) => setInput({ ...input, welcomeText: e.target.value })} autoComplete='off' />
                        <label htmlFor="welcomeText" className='-mt-[0.35rem] text-xs'>Welcome Text</label>
                    </FloatLabel>
                </div>
                <div className='!mt-2'>
                    <div className=''>
                        <label className='pl-2 text-xs text-slate-500'>Title</label>
                        <HtmlEditor content={input.title} setContent={(content) => setInput({...input, title: content})} />
                    </div>
                </div>
                <div className='!mt-18'>
                    <FloatLabel>
                        <InputText className='rounded-xl w-full text-xs border border-slate-300 px-4 py-3' id="ayat"
                            value={input.ayat}
                            onChange={(e) => setInput({ ...input, ayat: e.target.value })} autoComplete='off' />
                        <label htmlFor="ayat" className='-mt-[0.35rem] text-xs'>Ayat</label>
                    </FloatLabel>
                </div>
                <div className=''>
                    <FloatLabel>
                        <InputTextarea className='rounded-xl w-full text-xs border border-slate-300 px-4 py-3' id="isiAyat"
                            value={input.isiAyat}
                            onChange={(e) => setInput({ ...input, isiAyat: e.target.value })} autoComplete='off' />
                        <label htmlFor="watchIdLive" className='-mt-[0.35rem] text-xs'>Isi Ayat</label>
                    </FloatLabel>
                </div>
                <div className=''>
                    <FloatLabel>
                        <InputText className='rounded-xl w-full text-xs border border-slate-300 px-4 py-3' id="welcomeText"
                            value={input.tentangGereja}
                            onChange={(e) => setInput({ ...input, tentangGereja: e.target.value })} autoComplete='off' />
                        <label htmlFor="welcomeText" className='-mt-[0.35rem] text-xs'>Tentang Gereja</label>
                    </FloatLabel>
                </div>
                <div className='!mt-2'>
                    <div className=''>
                        <label className='pl-2 text-xs text-slate-500'>Tentang Gereja Description</label>
                        <HtmlEditor content={input.tentangGerejaDesc} setContent={(content) => setInput({...input, tentangGerejaDesc: content})} />
                    </div>
                </div>
                <div className='!mt-18'>
                    <FloatLabel>
                        <InputText className='rounded-xl w-full text-xs border border-slate-300 px-4 py-3' id="ayat"
                            value={input.tentangGerejaButton}
                            onChange={(e) => setInput({ ...input, tentangGerejaButton: e.target.value })} autoComplete='off' />
                        <label htmlFor="ayat" className='-mt-[0.35rem] text-xs'>Tentang Gereja Button</label>
                    </FloatLabel>
                </div>
                <div className=''>
                    <FloatLabel>
                        <InputText className='rounded-xl w-full text-xs border border-slate-300 px-4 py-3' id="welcomeText"
                            value={input.renunganHarianHome}
                            onChange={(e) => setInput({ ...input, renunganHarianHome: e.target.value })} autoComplete='off' />
                        <label htmlFor="welcomeText" className='-mt-[0.35rem] text-xs'>Renungan Harian (HOME)</label>
                    </FloatLabel>
                </div>
                <div className='!mt-2'>
                    <div className=''>
                        <label className='pl-2 text-xs text-slate-500'>Renungan Harian Desc (HOME)</label>
                        <HtmlEditor content={input.renunganHarianHomeDesc} setContent={(content) => setInput({...input, renunganHarianHomeDesc: content})} />
                    </div>
                </div>
                <div className='!mt-18'>
                    <FloatLabel>
                        <InputText className='rounded-xl w-full text-xs border border-slate-300 px-4 py-3' id="ayat"
                            value={input.live}
                            onChange={(e) => setInput({ ...input, live: e.target.value })} autoComplete='off' />
                        <label htmlFor="ayat" className='-mt-[0.35rem] text-xs'>Live Label</label>
                    </FloatLabel>
                </div>
                <div className='!mt-2'>
                    <div className=''>
                        <label className='pl-2 text-xs text-slate-500'>Live Desc</label>
                        <HtmlEditor content={input.liveDesc} setContent={(content) => setInput({...input, liveDesc: content})} />
                    </div>
                </div>
                <div className='!mt-18'>
                    <FloatLabel>
                        <InputText className='rounded-xl w-full text-xs border border-slate-300 px-4 py-3' id="ayat"
                            value={input.kenangan}
                            onChange={(e) => setInput({ ...input, kenangan: e.target.value })} autoComplete='off' />
                        <label htmlFor="ayat" className='-mt-[0.35rem] text-xs'>Kenangan</label>
                    </FloatLabel>
                </div>
            </div>
            <div className='mt-4'>
                <Button type='submit' disabled={isLoading || !input.watchIdLive}
                    loading={isLoading}
                    className='w-full border border-blue-400 text-blue-400 py-2 rounded-xl disabled:border-slate-300 disabled:text-slate-300 disabled:hover:bg-transparent disabled:hover:text-slate-300 hover:text-white hover:bg-blue-400'>
                    Save
                </Button>
            </div>
        </form>
    )
}

export default SettingForm