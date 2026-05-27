'use client'
import { InventoryCategoryInput } from '@/types/inventoryCategory'
import React from 'react'
import InventoryCategoryForm from './InventoryCategoryForm'
import EditModalShell from '../UI/EditModalShell'

type EditInventoryCategoryModalProps = {
    id: string,
    inventoryCategory: InventoryCategoryInput
}

const EditInventoryCategoryModal = ({ id, inventoryCategory }: EditInventoryCategoryModalProps) => {
    return (
        <EditModalShell title="Edit Kategori Inventaris">
            <InventoryCategoryForm input={inventoryCategory} id={id} />
        </EditModalShell>
    )
}

export default EditInventoryCategoryModal
