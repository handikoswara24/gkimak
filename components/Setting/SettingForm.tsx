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
import { TabPanel, TabView } from 'primereact/tabview';

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
            <TabView>
                <TabPanel header="Home">
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
                                <HtmlEditor keys={"title"} content={input.title} setContent={(content) => setInput({ ...input, title: content })} />
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
                                <HtmlEditor keys={"tentangGerejaDesc"} content={input.tentangGerejaDesc} setContent={(content) => setInput({ ...input, tentangGerejaDesc: content })} />
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
                                <HtmlEditor keys={"renunganHarianHomeDesc"} content={input.renunganHarianHomeDesc} setContent={(content) => setInput({ ...input, renunganHarianHomeDesc: content })} />
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
                                <HtmlEditor keys={"liveDesc"} content={input.liveDesc} setContent={(content) => setInput({ ...input, liveDesc: content })} />
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
                </TabPanel>
                <TabPanel header="About">
                    <div className='space-y-8'>
                        <div className=''>
                            <FloatLabel>
                                <InputText className='rounded-xl w-full text-xs border border-slate-300 px-4 py-3' id="aboutTitle"
                                    value={input.aboutTitle}
                                    onChange={(e) => setInput({ ...input, aboutTitle: e.target.value })} autoComplete='off' />
                                <label htmlFor="aboutTitle" className='-mt-[0.35rem] text-xs'>About Title</label>
                            </FloatLabel>
                        </div>
                        <div className='!mt-2'>
                            <div className=''>
                                <label className='pl-2 text-xs text-slate-500'>About Title Description</label>
                                <HtmlEditor keys={"aboutDesc"} content={input.aboutDesc} setContent={(content) => setInput({...input, aboutDesc: content})} />
                            </div>
                        </div>
                        <div className='!mt-18'>
                            <FloatLabel>
                                <InputText className='rounded-xl w-full text-xs border border-slate-300 px-4 py-3' id="aboutTitle2"
                                    value={input.aboutTitle2}
                                    onChange={(e) => setInput({ ...input, aboutTitle2: e.target.value })} autoComplete='off' />
                                <label htmlFor="aboutTitle2" className='-mt-[0.35rem] text-xs'>About Title 2</label>
                            </FloatLabel>
                        </div>
                        <div className='!mt-2'>
                            <div className=''>
                                <label className='pl-2 text-xs text-slate-500'>About Title Description 2</label>
                                <HtmlEditor keys={"aboutDesc2"} content={input.aboutDesc2} setContent={(content) => setInput({ ...input, aboutDesc2: content })} />
                            </div>
                        </div>
                        <div className='!mt-18'>
                            <FloatLabel>
                                <InputText className='rounded-xl w-full text-xs border border-slate-300 px-4 py-3' id="aboutBannerTitle"
                                    value={input.aboutBannerTitle}
                                    onChange={(e) => setInput({ ...input, aboutBannerTitle: e.target.value })} autoComplete='off' />
                                <label htmlFor="aboutBannerTitle" className='-mt-[0.35rem] text-xs'>About Banner Title</label>
                            </FloatLabel>
                        </div>
                        <div className=''>
                            <FloatLabel>
                                <InputText className='rounded-xl w-full text-xs border border-slate-300 px-4 py-3' id="aboutMissionTitle"
                                    value={input.aboutMissionTitle}
                                    onChange={(e) => setInput({ ...input, aboutMissionTitle: e.target.value })} autoComplete='off' />
                                <label htmlFor="aboutTitle2" className='-mt-[0.35rem] text-xs'>About Mission Title</label>
                            </FloatLabel>
                        </div>
                        <div className='!mt-2'>
                            <div className=''>
                                <label className='pl-2 text-xs text-slate-500'>About Mission Description</label>
                                <HtmlEditor keys={"aboutMissionDesc"} content={input.aboutMissionDesc} setContent={(content) => setInput({ ...input, aboutMissionDesc: content })} />
                            </div>
                        </div>
                        <div className='!mt-18'>
                            <FloatLabel>
                                <InputText className='rounded-xl w-full text-xs border border-slate-300 px-4 py-3' id="aboutVisionTitle"
                                    value={input.aboutVisionTitle}
                                    onChange={(e) => setInput({ ...input, aboutVisionTitle: e.target.value })} autoComplete='off' />
                                <label htmlFor="aboutVisionTitle" className='-mt-[0.35rem] text-xs'>About Vision Title</label>
                            </FloatLabel>
                        </div>
                        <div className='!mt-2'>
                            <div className=''>
                                <label className='pl-2 text-xs text-slate-500'>About Vision Description</label>
                                <HtmlEditor keys={"aboutVisionDesc"} content={input.aboutVisionDesc} setContent={(content) => setInput({ ...input, aboutVisionDesc: content })} />
                            </div>
                        </div>
                        <div className='!mt-18'>
                            <FloatLabel>
                                <InputText className='rounded-xl w-full text-xs border border-slate-300 px-4 py-3' id="aboutStatementFaith"
                                    value={input.aboutStatementFaith}
                                    onChange={(e) => setInput({ ...input, aboutStatementFaith: e.target.value })} autoComplete='off' />
                                <label htmlFor="aboutStatementFaith" className='-mt-[0.35rem] text-xs'>About Statement Faith Title</label>
                            </FloatLabel>
                        </div>
                        <div className='!mt-2'>
                            <div className=''>
                                <label className='pl-2 text-xs text-slate-500'>About Statement Faith Description</label>
                                <HtmlEditor keys={"aboutStatementFaithDesc"} content={input.aboutStatementFaithDesc} setContent={(content) => setInput({ ...input, aboutStatementFaithDesc: content })} />
                            </div>
                        </div>
                        <div className='!mt-18'>
                            <FloatLabel>
                                <InputText className='rounded-xl w-full text-xs border border-slate-300 px-4 py-3' id="leaderTitle"
                                    value={input.leaderTitle}
                                    onChange={(e) => setInput({ ...input, leaderTitle: e.target.value })} autoComplete='off' />
                                <label htmlFor="leaderTitle" className='-mt-[0.35rem] text-xs'>Leader Title</label>
                            </FloatLabel>
                        </div>
                        <div className='!mt-2'>
                            <div className=''>
                                <label className='pl-2 text-xs text-slate-500'>Leader Description</label>
                                <HtmlEditor keys={"leaderDesc"} content={input.leaderDesc} setContent={(content) => setInput({ ...input, leaderDesc: content })} />
                            </div>
                        </div>
                        <div className='!mt-18'>
                            <FloatLabel>
                                <InputText className='rounded-xl w-full text-xs border border-slate-300 px-4 py-3' id="faqTitle"
                                    value={input.faqTitle}
                                    onChange={(e) => setInput({ ...input, faqTitle: e.target.value })} autoComplete='off' />
                                <label htmlFor="faqTitle" className='-mt-[0.35rem] text-xs'>FAQ Title</label>
                            </FloatLabel>
                        </div>
                        <div className=''>
                            <FloatLabel>
                                <InputText className='rounded-xl w-full text-xs border border-slate-300 px-4 py-3' id="hubTitle"
                                    value={input.hubTitle}
                                    onChange={(e) => setInput({ ...input, hubTitle: e.target.value })} autoComplete='off' />
                                <label htmlFor="hubTitle" className='-mt-[0.35rem] text-xs'>Hub Title</label>
                            </FloatLabel>
                        </div>
                        <div className=''>
                            <FloatLabel>
                                <InputText className='rounded-xl w-full text-xs border border-slate-300 px-4 py-3' id="waTitle"
                                    value={input.waTitle}
                                    onChange={(e) => setInput({ ...input, waTitle: e.target.value })} autoComplete='off' />
                                <label htmlFor="waTitle" className='-mt-[0.35rem] text-xs'>WA Title</label>
                            </FloatLabel>
                        </div>
                        <div className=''>
                            <FloatLabel>
                                <InputText className='rounded-xl w-full text-xs border border-slate-300 px-4 py-3' id="waNumber"
                                    value={input.waNumber}
                                    onChange={(e) => setInput({ ...input, waNumber: e.target.value })} autoComplete='off' />
                                <label htmlFor="waNumber" className='-mt-[0.35rem] text-xs'>WA Number</label>
                            </FloatLabel>
                        </div>
                        <div className=''>
                            <FloatLabel>
                                <InputText className='rounded-xl w-full text-xs border border-slate-300 px-4 py-3' id="addressTitle"
                                    value={input.addressTitle}
                                    onChange={(e) => setInput({ ...input, addressTitle: e.target.value })} autoComplete='off' />
                                <label htmlFor="addressTitle" className='-mt-[0.35rem] text-xs'>Address Title</label>
                            </FloatLabel>
                        </div>
                        <div className=''>
                            <FloatLabel>
                                <InputText className='rounded-xl w-full text-xs border border-slate-300 px-4 py-3' id="address"
                                    value={input.address}
                                    onChange={(e) => setInput({ ...input, address: e.target.value })} autoComplete='off' />
                                <label htmlFor="address" className='-mt-[0.35rem] text-xs'>Address</label>
                            </FloatLabel>
                        </div>
                        <div className=''>
                            <FloatLabel>
                                <InputText className='rounded-xl w-full text-xs border border-slate-300 px-4 py-3' id="mapsButtonLabel"
                                    value={input.mapsButtonLabel}
                                    onChange={(e) => setInput({ ...input, mapsButtonLabel: e.target.value })} autoComplete='off' />
                                <label htmlFor="mapsButtonLabel" className='-mt-[0.35rem] text-xs'>Maps Button Label</label>
                            </FloatLabel>
                        </div>
                    </div>
                </TabPanel>
                <TabPanel header="Renungan">

                </TabPanel>
            </TabView>

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