'use client'

import { useAddUpdateSetting, useGetSetting } from '@/service/setting-query'
import { SettingType } from '@/types/setting';
import { FloatLabel } from 'primereact/floatlabel';
import { InputText } from 'primereact/inputtext';
import React, { useState } from 'react'
import { useQueryClient } from 'react-query';
import { toast } from 'react-toastify';
import Button from '../UI/Button';

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