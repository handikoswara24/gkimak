import { InventoryType } from '@/types/inventory'
import React from 'react'
import QRCode from 'react-qr-code'

type QRInventoryModalType = {
    data: InventoryType
}

const QRInventoryModal = ({ data }: QRInventoryModalType) => {
    return (
        <div className='max-w-xl mx-auto mt-6'>
            <div className='text-center text-2xl font-bold'>
                {data.name}
            </div>
            <div className='mt-8 flex justify-center'>
                <QRCode value={data.code} />
            </div>
        </div>
    )
}

export default QRInventoryModal