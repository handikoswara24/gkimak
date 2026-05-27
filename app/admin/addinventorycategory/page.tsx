import InventoryCategoryForm from '@/components/InventoryCategory/InventoryCategoryForm'
import FormCard from '@/components/UI/FormCard'
import { DEFAULTINVENTORYCATEGORY } from '@/constants/inventoryCategoryConstant'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: 'GKim Amanat Kristus - Tambah Kategori Inventaris',
}

const AddInventoryCategoryPage = () => {
    return (
        <FormCard title="Tambah Kategori Inventaris" backHref="/admin/inventorycategory">
            <InventoryCategoryForm input={DEFAULTINVENTORYCATEGORY} />
        </FormCard>
    )
}

export default AddInventoryCategoryPage