import React from 'react'
import { useModalAction } from '../utils/ModalProvider'
import { InventoryInput, InventoryType } from '@/types/inventory'

type EditInventoryButtonProps = {
    data: InventoryType
}


const EditInventoryButton = ({ data }: EditInventoryButtonProps) => {
    const { openModal } = useModalAction();
    const inventory: InventoryInput = {
        name: data.name,
        categoryId: data.categoryId,
        categoryLookup: data.categoryLookup,
        description: data.description,
        qty: data.qty,
        borrowed: data.borrowed,
        broken: data.broken,
        condition: data.condition,
        status: data.status
    }
    return (
        <div>
            <i className="pi pi-user-edit text-lg text-blue-300 cursor-pointer" onClick={() => openModal("INVENTORYFORM", { id: data._id, inventory })}></i>
        </div>
    )
}

export default EditInventoryButton