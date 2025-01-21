import { JemaatInput } from '@/types/jemaat'
import React from 'react'
import JemaatForm from './JemaatForm'

type EditJemaatModalProps = {
    id: string,
    jemaat: JemaatInput
}

const EditJemaatModal = ({ id, jemaat }: EditJemaatModalProps) => {
    return (
        <div className='max-w-xl mx-auto'>
            <h1 className='text-xl font-semibold'>Edit Jemaat</h1>
            <div>
                <JemaatForm input={jemaat} id={id} />
            </div>
        </div>
    )
}

export default EditJemaatModal