import { InventoryCategoryType } from '@/types/inventoryCategory'
import React from 'react'
import EditInventoryCategoryButton from './EditInventoryCategoryButton'
import DeleteInventoryCategoryButton from './DeleteInventoryCategoryButton'

type InventoryCategoryButtonsProps = {
    data: InventoryCategoryType
}


const InventoryCategoryButtons = ({ data }: InventoryCategoryButtonsProps) => {
    return (
        <div className='flex flex-row'>
            <EditInventoryCategoryButton data={data} />
            <DeleteInventoryCategoryButton data={data} />
        </div>
    )
}

export default InventoryCategoryButtons