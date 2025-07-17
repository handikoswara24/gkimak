import ListInventoryCategory from '@/components/InventoryCategory/ListInventoryCategory'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: 'GKim Amanat Kristus - Inventory Category',
}

const InventoryCategoryPage = () => {
    return (
        <ListInventoryCategory />
    )
}

export default InventoryCategoryPage