'use client'
import { RenunganHarianInput, RenunganHarianType } from '@/types/renunganharian'
import React from 'react'
import { useModalAction } from '../utils/ModalProvider'
type EditRenunganProps = {
    data: RenunganHarianType
}

const EditRenunganButton = ({ data }: EditRenunganProps) => {
    const { openModal } = useModalAction();
    const renungan: RenunganHarianInput = {
        author: data.author,
        content: data.content,
        date: data.date,
        image: data.image.map(e => e.url),
        title: data.title,
        verse: data.verse,
        ayatBgColor: data.ayatBgColor,
        ayatColor: data.ayatColor,
        isiAyat: data.isiAyat,
        refleksi: data.refleksi,
        refleksiBgColor: data.refleksiBgColor,
        refleksiColor: data.refleksiColor,
        renunganBgColor: data.refleksiBgColor,
        renunganColor: data.renunganColor
    }
    return (
        <div className="mr-3">
            <i className="pi pi-user-edit text-lg text-blue-300 cursor-pointer" onClick={() => openModal("RENUNGANFORM", { id: data._id, renungan })}></i>
        </div>
    )
}

export default EditRenunganButton