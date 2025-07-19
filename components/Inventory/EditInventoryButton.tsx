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
        description: data.description
    }
    return (
        <div className="mr-3">
            <i className="pi pi-user-edit text-lg text-blue-300 cursor-pointer" onClick={() => openModal("INVENTORYFORM", { id: data._id, inventory })}></i>
        </div>
    )
}

export default EditInventoryButton