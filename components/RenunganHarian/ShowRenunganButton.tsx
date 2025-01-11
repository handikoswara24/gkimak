import { RenunganHarianType } from '@/types/renunganharian'
import React from 'react'
import EyeIcon from '../Icons/EyeIcon'

type ShowRenunganButtonProps = {
    data: RenunganHarianType
}

const ShowRenunganButton = ({data} : ShowRenunganButtonProps) => {
    const onClick = () => {
        window.open("/renungan/" + data.slug, "_blank");
    }
    return (
        <div className='mr-3 cursor-pointer' onClick={onClick}>
            <EyeIcon className='size-5 text-green-400' />
        </div>
    )
}

export default ShowRenunganButton