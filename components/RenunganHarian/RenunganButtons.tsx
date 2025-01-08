'use client'
import { RenunganHarianType } from '@/types/renunganharian'
import React from 'react'
import EditRenunganButton from './EditRenunganButton'
import DeleteRenunganButton from './DeleteRenunganButton'

type RenunganButtonsProps = {
    data: RenunganHarianType
}

const RenunganButtons = ({ data }: RenunganButtonsProps) => {
    return (
        <div className='flex flex-row'>
            <EditRenunganButton data={data} />
            <DeleteRenunganButton data={data} />
        </div>
    )
}

export default RenunganButtons