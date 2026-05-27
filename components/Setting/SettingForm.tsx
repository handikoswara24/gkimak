'use client'

import { useAddUpdateSetting } from '@/service/setting-query'
import { SettingType } from '@/types/setting';
import React, { useState } from 'react'
import { useQueryClient } from 'react-query';
import { toast } from 'react-toastify';
import Button from '../UI/Button';
import HtmlEditor from '../UI/HtmlEditor';
import { TabPanel, TabView } from 'primereact/tabview';
import FormField from '../UI/FormField';

type SettingFormProps = {
    data: SettingType
}

// Helper: field input text yang konsisten
const TextField = ({ label, id, value, onChange, placeholder }: {
    label: string, id: string, value: string, onChange: (v: string) => void, placeholder?: string
}) => (
    <FormField label={label} htmlFor={id}>
        <input
            id={id}
            className="admin-input"
            value={value ?? ""}
            onChange={(e) => onChange(e.target.value)}
            autoComplete="off"
            placeholder={placeholder ?? `Masukkan ${label.toLowerCase()}`}
        />
    </FormField>
)

// Helper: field textarea yang konsisten
const TextAreaField = ({ label, id, value, onChange }: {
    label: string, id: string, value: string, onChange: (v: string) => void
}) => (
    <FormField label={label} htmlFor={id}>
        <textarea
            id={id}
            className="admin-input resize-none"
            rows={3}
            value={value ?? ""}
            onChange={(e) => onChange(e.target.value)}
        />
    </FormField>
)

// Helper: Rich text editor field
const EditorField = ({ label, keys, content, setContent }: {
    label: string, keys: string, content: string, setContent: (v: string) => void
}) => (
    <FormField label={label}>
        <div className="rounded-lg border border-stroke overflow-hidden">
            <HtmlEditor keys={keys} content={content} setContent={setContent} />
        </div>
    </FormField>
)

const SettingForm = ({ data }: SettingFormProps) => {
    const queryClient = useQueryClient();
    const [input, setInput] = useState(data);
    const { mutate: addUpdateSetting, isLoading } = useAddUpdateSetting();

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        addUpdateSetting(input, {
            onSuccess: () => {
                toast.success("Pengaturan berhasil disimpan!");
                queryClient.invalidateQueries({ queryKey: ["setting"] })
            },
            onError: (err: any) => { toast.error(err?.message ?? "Terjadi kesalahan"); }
        })
    }

    const set = (key: keyof SettingType) => (v: string) => setInput({ ...input, [key]: v })

    return (
        <form onSubmit={onSubmit} className="admin-form">
            <TabView>
                <TabPanel header="Home">
                    <div className="space-y-5">
                        <TextField label="Watch ID Live (YouTube)" id="watchIdLive" value={input.watchIdLive} onChange={set("watchIdLive")} placeholder="Contoh: dQw4w9WgXcQ" />
                        <TextField label="Welcome Text" id="welcomeText" value={input.welcomeText} onChange={set("welcomeText")} />
                        <EditorField label="Title" keys="title" content={input.title} setContent={set("title")} />
                        <TextField label="Ayat" id="ayat" value={input.ayat} onChange={set("ayat")} placeholder="Contoh: Yohanes 3:16" />
                        <TextAreaField label="Isi Ayat" id="isiAyat" value={input.isiAyat} onChange={set("isiAyat")} />

                        <div className="border-t border-stroke pt-5 mt-5">
                            <p className="text-xs font-semibold text-body uppercase tracking-wide mb-4">Tentang Gereja</p>
                            <div className="space-y-5">
                                <TextField label="Judul Tentang Gereja" id="tentangGereja" value={input.tentangGereja} onChange={set("tentangGereja")} />
                                <EditorField label="Deskripsi Tentang Gereja" keys="tentangGerejaDesc" content={input.tentangGerejaDesc} setContent={set("tentangGerejaDesc")} />
                                <TextField label="Teks Tombol" id="tentangGerejaButton" value={input.tentangGerejaButton} onChange={set("tentangGerejaButton")} />
                            </div>
                        </div>

                        <div className="border-t border-stroke pt-5 mt-5">
                            <p className="text-xs font-semibold text-body uppercase tracking-wide mb-4">Renungan Harian (Beranda)</p>
                            <div className="space-y-5">
                                <TextField label="Judul Renungan Harian" id="renunganHarianHome" value={input.renunganHarianHome} onChange={set("renunganHarianHome")} />
                                <EditorField label="Deskripsi Renungan Harian" keys="renunganHarianHomeDesc" content={input.renunganHarianHomeDesc} setContent={set("renunganHarianHomeDesc")} />
                            </div>
                        </div>

                        <div className="border-t border-stroke pt-5 mt-5">
                            <p className="text-xs font-semibold text-body uppercase tracking-wide mb-4">Live Streaming</p>
                            <div className="space-y-5">
                                <TextField label="Label Live" id="live" value={input.live} onChange={set("live")} />
                                <EditorField label="Deskripsi Live" keys="liveDesc" content={input.liveDesc} setContent={set("liveDesc")} />
                                <TextField label="Kenangan" id="kenangan" value={input.kenangan} onChange={set("kenangan")} />
                            </div>
                        </div>
                    </div>
                </TabPanel>

                <TabPanel header="About">
                    <div className="space-y-5">
                        <TextField label="About Title" id="aboutTitle" value={input.aboutTitle} onChange={set("aboutTitle")} />
                        <EditorField label="About Description" keys="aboutDesc" content={input.aboutDesc} setContent={set("aboutDesc")} />

                        <div className="border-t border-stroke pt-5">
                            <TextField label="About Title 2" id="aboutTitle2" value={input.aboutTitle2} onChange={set("aboutTitle2")} />
                            <div className="mt-5">
                                <EditorField label="About Description 2" keys="aboutDesc2" content={input.aboutDesc2} setContent={set("aboutDesc2")} />
                            </div>
                        </div>

                        <div className="border-t border-stroke pt-5">
                            <p className="text-xs font-semibold text-body uppercase tracking-wide mb-4">Banner & Misi</p>
                            <div className="space-y-5">
                                <TextField label="About Banner Title" id="aboutBannerTitle" value={input.aboutBannerTitle} onChange={set("aboutBannerTitle")} />
                                <TextField label="Mission Title" id="aboutMissionTitle" value={input.aboutMissionTitle} onChange={set("aboutMissionTitle")} />
                                <EditorField label="Mission Description" keys="aboutMissionDesc" content={input.aboutMissionDesc} setContent={set("aboutMissionDesc")} />
                            </div>
                        </div>

                        <div className="border-t border-stroke pt-5">
                            <p className="text-xs font-semibold text-body uppercase tracking-wide mb-4">Visi & Statement Iman</p>
                            <div className="space-y-5">
                                <TextField label="Vision Title" id="aboutVisionTitle" value={input.aboutVisionTitle} onChange={set("aboutVisionTitle")} />
                                <EditorField label="Vision Description" keys="aboutVisionDesc" content={input.aboutVisionDesc} setContent={set("aboutVisionDesc")} />
                                <TextField label="Statement Faith Title" id="aboutStatementFaith" value={input.aboutStatementFaith} onChange={set("aboutStatementFaith")} />
                                <EditorField label="Statement Faith Description" keys="aboutStatementFaithDesc" content={input.aboutStatementFaithDesc} setContent={set("aboutStatementFaithDesc")} />
                            </div>
                        </div>

                        <div className="border-t border-stroke pt-5">
                            <p className="text-xs font-semibold text-body uppercase tracking-wide mb-4">Leadership & FAQ</p>
                            <div className="space-y-5">
                                <TextField label="Leader Title" id="leaderTitle" value={input.leaderTitle} onChange={set("leaderTitle")} />
                                <EditorField label="Leader Description" keys="leaderDesc" content={input.leaderDesc} setContent={set("leaderDesc")} />
                                <TextField label="FAQ Title" id="faqTitle" value={input.faqTitle} onChange={set("faqTitle")} />
                            </div>
                        </div>

                        <div className="border-t border-stroke pt-5">
                            <p className="text-xs font-semibold text-body uppercase tracking-wide mb-4">Kontak & Lokasi</p>
                            <div className="space-y-5">
                                <TextField label="Hub Title" id="hubTitle" value={input.hubTitle} onChange={set("hubTitle")} />
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <TextField label="WhatsApp Title" id="waTitle" value={input.waTitle} onChange={set("waTitle")} />
                                    <TextField label="WhatsApp Number" id="waNumber" value={input.waNumber} onChange={set("waNumber")} placeholder="Contoh: 628123456789" />
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <TextField label="Address Title" id="addressTitle" value={input.addressTitle} onChange={set("addressTitle")} />
                                    <TextField label="Alamat" id="address" value={input.address} onChange={set("address")} />
                                </div>
                                <TextField label="Teks Tombol Maps" id="mapsButtonLabel" value={input.mapsButtonLabel} onChange={set("mapsButtonLabel")} />
                            </div>
                        </div>
                    </div>
                </TabPanel>

                <TabPanel header="Renungan">
                    <div className="space-y-5">
                        <TextField label="Renungan Title 1" id="renunganTitle1" value={input.renunganTitle1} onChange={set("renunganTitle1")} />
                        <EditorField label="Renungan Description 1" keys="renunganDesc1" content={input.renunganDesc1} setContent={set("renunganDesc1")} />

                        <div className="border-t border-stroke pt-5">
                            <TextField label="Renungan Title 2" id="renunganTitle2" value={input.renunganTitle2} onChange={set("renunganTitle2")} />
                            <div className="mt-5">
                                <EditorField label="Renungan Description 2" keys="renunganDesc2" content={input.renunganDesc2} setContent={set("renunganDesc2")} />
                            </div>
                        </div>
                    </div>
                </TabPanel>
            </TabView>

            <div className="mt-6 pt-4 border-t border-stroke">
                <Button
                    type="submit"
                    disabled={isLoading || !input.watchIdLive}
                    loading={isLoading}
                    size="lg"
                >
                    Simpan Pengaturan
                </Button>
            </div>
        </form>
    )
}

export default SettingForm
