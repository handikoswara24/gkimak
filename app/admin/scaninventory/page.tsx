import ScanInventory from '@/components/Inventory/ScanInventory'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: 'GKim Amanat Kristus - Scan Inventory',
}

const ScanInvetoryPage = () => {
    return (
        <ScanInventory />
    )
}

export default ScanInvetoryPage