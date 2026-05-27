'use client'
import { RenunganHarianInput } from '@/types/renunganharian'
import React from 'react'
import RenunganHarianForm from './RenunganHarianForm'
import EditModalShell from '../UI/EditModalShell'

type EditRenunganModalProps = {
    id: string,
    renungan: RenunganHarianInput
}

const EditRenunganModal = ({ id, renungan }: EditRenunganModalProps) => {
    return (
        <EditModalShell title="Edit Renungan Harian" maxWidth="lg">
            <RenunganHarianForm data={renungan} id={id} />
        </EditModalShell>
    )
}

export default EditRenunganModal
