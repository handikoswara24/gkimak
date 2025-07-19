import { InventoryCategoryInput } from '@/types/inventoryCategory'
import React from 'react'
import InventoryCategoryForm from './InventoryCategoryForm'

type EditInventoryCategoryModalProps = {
    id: string,
    inventoryCategory: InventoryCategoryInput
}

const EditInventoryCategoryModal = ({ id, inventoryCategory }: EditInventoryCategoryModalProps) => {
    return (
        <div className='max-w-xl mx-auto'>
            <h1 className='text-xl font-semibold'>Edit Inventory Category</h1>
            <div>
                <InventoryCategoryForm input={inventoryCategory} id={id} />
            </div>
        </div>
    )
}

export default EditInventoryCategoryModal