import { Condition, Status } from '@/constants/inventoryConstant'
import { InventoryType } from '@/types/inventory'
import React from 'react'

type InventoryDisplayProps = {
    inventory: InventoryType
}

const InventoryDisplay = ({ inventory }: InventoryDisplayProps) => {
    return (
        <div className='overflow-y-auto'>
            <div className='text-center text-xl font-semibold mb-3'>
                Inventory
            </div>
            <div className='flex justify-center gap-y-4 text-sm flex-col max-w-96 mx-auto'>
                <div>
                    <div className='w-32 font-semibold'>
                        Name
                    </div>
                    <div>
                        {inventory.name}
                    </div>
                </div>
                <div>
                    <div className='w-32 font-semibold'>
                        Description
                    </div>
                    <div>
                        {inventory.description}
                    </div>
                </div>
                <div>
                    <div className='w-32 font-semibold'>
                        Category
                    </div>
                    <div>
                        {inventory.categoryId ? inventory.categoryLookup.name : "-"}
                    </div>
                </div>
                <div>
                    <div className='w-32 font-semibold'>
                        Location
                    </div>
                    <div>
                        {inventory.locationLookup?.name ?? "-"}
                    </div>
                </div>
                <div>
                    <div className='w-32 font-semibold'>
                        Qty
                    </div>
                    <div>
                        {inventory.qty ?? "-"}
                    </div>
                </div>
                <div>
                    <div className='w-32 font-semibold'>
                        Condition
                    </div>
                    <div>
                        {Condition.find(e => e.value == inventory.condition)?.label ?? "-"}
                    </div>
                </div>
                <div>
                    <div className='w-32 font-semibold'>
                        Status
                    </div>
                    <div>
                        {Status.find(e => e.value == inventory.status)?.label ?? "-"}
                    </div>
                </div>
                <div>
                    <div className='w-32 font-semibold'>
                        Borrowed
                    </div>
                    <div>
                        {inventory.borrowed ?? 0}
                    </div>
                </div>
                <div>
                    <div className='w-32 font-semibold'>
                        Broken
                    </div>
                    <div>
                        {inventory.broken ?? 0}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InventoryDisplay