import { InventoryInput } from '@/types/inventory'
import React from 'react'
import InventoryForm from './InventoryForm'

type EditInventoryModalProps = {
    id: string,
    inventory: InventoryInput
}

const EditInventoryModal = ({ id, inventory }: EditInventoryModalProps) => {
    return (
        <div className='max-w-xl mx-auto'>
            <h1 className='text-xl font-semibold'>Edit Inventory</h1>
            <div>
                <InventoryForm input={inventory} id={id} />
            </div>
        </div>
    )
}

export default EditInventoryModal