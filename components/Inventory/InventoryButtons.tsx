import { InventoryType } from '@/types/inventory'
import React from 'react'
import EditInventoryButton from './EditInventoryButton'
import DeleteInventoryButton from './DeleteInventoryButton'
import QRInventoryButton from './QRInventoryButton'

type InventoryButtonsProps = {
    data: InventoryType
}

const InventoryButtons = ({ data }: InventoryButtonsProps) => {
    return (
        <div className='flex flex-row gap-x-2'>
            <EditInventoryButton data={data} />
            <QRInventoryButton data={data} />
            <DeleteInventoryButton data={data} />
        </div>
    )
}

export default InventoryButtons