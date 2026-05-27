import InventoryForm from '@/components/Inventory/InventoryForm'
import FormCard from '@/components/UI/FormCard'
import { INVENTORYDEFAULT } from '@/constants/inventoryConstant'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: 'GKim Amanat Kristus - Tambah Inventaris',
}
const AddInventoryPage = () => {
    return (
        <FormCard title="Tambah Inventaris" backHref="/admin/inventory" maxWidth="lg">
            <InventoryForm input={INVENTORYDEFAULT} />
        </FormCard>
    )
}

export default AddInventoryPage