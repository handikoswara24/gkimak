import { JemaatInput, JemaatType } from '@/types/jemaat'
import React from 'react'
import { useModalAction } from '../utils/ModalProvider'
import { InventoryCategoryInput, InventoryCategoryType } from '@/types/inventoryCategory'

type EditInventoryCategoryButtonProps = {
    data: InventoryCategoryType
}

const EditInventoryCategoryButton = ({ data }: EditInventoryCategoryButtonProps) => {
    const { openModal } = useModalAction();
    const inventoryCategory: InventoryCategoryInput = {
        code : data.code,
        name: data.name,
        parentId: data.parentId,
        parentLookup: data.parentLookup
    }
    return (
        <div className="mr-3">
            <i className="pi pi-user-edit text-lg text-blue-300 cursor-pointer" onClick={() => openModal("INVENTORYCATEGORYFORM", { id: data._id, inventoryCategory })}></i>
        </div>
    )
}

export default EditInventoryCategoryButton