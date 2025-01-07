import { RenunganHarianInput } from '@/types/renunganharian'
import React from 'react'
import RenunganHarianForm from './RenunganHarianForm'

type EditRenunganModalProps = {
    id: string,
    renungan: RenunganHarianInput
}

const EditRenunganModal = ({ id, renungan }: EditRenunganModalProps) => {
    return (
        <div className='max-w-xl mx-auto'>
            <h1 className='text-xl font-semibold'>Edit User</h1>
            <div>
                <RenunganHarianForm data={renungan} id={id} />
            </div>
        </div>
    )
}

export default EditRenunganModal