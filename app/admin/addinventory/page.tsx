import InventoryForm from '@/components/Inventory/InventoryForm'
import { INVENTORYDEFAULT } from '@/constants/inventoryConstant'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: 'GKim Amanat Kristus - Add Inventory',
}
const AddInventoryPage = () => {
    return (
        <InventoryForm input={INVENTORYDEFAULT} />
    )
}

export default AddInventoryPage