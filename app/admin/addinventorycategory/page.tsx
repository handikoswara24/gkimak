import InventoryCategoryForm from '@/components/InventoryCategory/InventoryCategoryForm'
import { DEFAULTINVENTORYCATEGORY } from '@/constants/inventoryCategoryConstant'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: 'GKim Amanat Kristus - Add Inventory Category',
}

const AddInventoryCategoryPage = () => {
    return (
        <InventoryCategoryForm input={DEFAULTINVENTORYCATEGORY} />
    )
}

export default AddInventoryCategoryPage