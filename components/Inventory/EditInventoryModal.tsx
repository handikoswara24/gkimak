'use client'
import { InventoryInput } from '@/types/inventory'
import React from 'react'
import InventoryForm from './InventoryForm'
import EditModalShell from '../UI/EditModalShell'

type EditInventoryModalProps = {
    id: string,
    inventory: InventoryInput
}

const EditInventoryModal = ({ id, inventory }: EditInventoryModalProps) => {
    return (
        <EditModalShell title="Edit Inventaris" maxWidth="lg">
            <InventoryForm input={inventory} id={id} />
        </EditModalShell>
    )
}

export default EditInventoryModal
