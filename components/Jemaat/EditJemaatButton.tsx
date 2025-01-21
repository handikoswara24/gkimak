import { JemaatInput, JemaatType } from '@/types/jemaat'
import React from 'react'
import { useModalAction } from '../utils/ModalProvider'

type EditJemaatButtonProps = {
    data: JemaatType
}

const EditJemaatButton = ({ data }: EditJemaatButtonProps) => {
    const { openModal } = useModalAction();
    const jemaat: JemaatInput = {
        nama: data.nama,
        nomorAnggota: data.nomorAnggota,
        telepon: data.telepon
    }
    return (
        <div className="mr-3">
            <i className="pi pi-user-edit text-lg text-blue-300 cursor-pointer" onClick={() => openModal("JEMAATFORM", { id: data._id, jemaat })}></i>
        </div>
    )
}

export default EditJemaatButton