import { InventoryType } from '@/types/inventory'
import React from 'react'
import EditInventoryButton from './EditInventoryButton'
import DeleteInventoryButton from './DeleteInventoryButton'

type InventoryButtonsProps = {
    data: InventoryType
}

const InventoryButtons = ({ data }: InventoryButtonsProps) => {
    return (
        <div className='flex flex-row'>
            <EditInventoryButton data={data} />
            <DeleteInventoryButton data={data} />
        </div>
    )
}

export default InventoryButtons