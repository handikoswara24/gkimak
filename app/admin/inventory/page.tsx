import ListInventory from '@/components/Inventory/ListInventory'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: 'GKim Amanat Kristus - Inventory',
}


const InventoryPage = () => {
    return (
        <ListInventory />
    )
}

export default InventoryPage