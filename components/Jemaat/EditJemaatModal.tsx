'use client'
import { JemaatInput } from '@/types/jemaat'
import React from 'react'
import JemaatForm from './JemaatForm'
import EditModalShell from '../UI/EditModalShell'

type EditJemaatModalProps = {
    id: string,
    jemaat: JemaatInput
}

const EditJemaatModal = ({ id, jemaat }: EditJemaatModalProps) => {
    return (
        <EditModalShell title="Edit Jemaat">
            <JemaatForm input={jemaat} id={id} />
        </EditModalShell>
    )
}

export default EditJemaatModal
