'use client'

import { getAllInventoryCategory } from '@/service/inventorycategory-query'
import { Lookup } from '@/types/common'
import { InventoryCategoryInput } from '@/types/inventoryCategory'
import { AutoComplete, AutoCompleteChangeEvent, AutoCompleteCompleteEvent } from 'primereact/autocomplete'
import React, { useEffect, useState } from 'react'

type AutocompleteInventoryCategoryProps = {
    input: InventoryCategoryInput,
    setInventoryCategoryData: React.Dispatch<React.SetStateAction<InventoryCategoryInput>>
}

const AutocompleteParentInventoryCategory = ({ input, setInventoryCategoryData }: AutocompleteInventoryCategoryProps) => {
    const [selectedValue, setSelectedCValue] = useState<Lookup | null>(input.parentLookup);
    const [filteredCategory, setFilteredCategory] = useState<Lookup[]>([]);

    useEffect(() => {
        if(!input.parentId){
            setSelectedCValue(null);
        }
    }, [input.parentLookup, input.parentId])

    const search = async (event: AutoCompleteCompleteEvent) => {
        // Timeout to emulate a network connection
        const result = await getAllInventoryCategory(1, 50, event.query);

        const filtered: Lookup[] = result.inventoryCategory.map((e) => {
            return {
                collection: "inventorycategory",
                name: e.name,
                id: e._id
            }
        })

        setFilteredCategory(filtered);
    }

    const OnChangeAutocomplete = (e : AutoCompleteChangeEvent) => {
        if(typeof e.value === "string"){
            if(!e.value){
                setInventoryCategoryData({...input, parentId: null, parentLookup: null})
            }
        }
        else{
            setInventoryCategoryData({...input, parentLookup: e.value, parentId: e.value.id})
        }
        setSelectedCValue(e.value);
    }

    return (
        <span className="p-float-label w-full">
            <AutoComplete inputId="ac" field='name' className='w-full'
                inputClassName='rounded-xl w-full text-xs border border-slate-300 px-4 py-3'
                value={selectedValue} suggestions={filteredCategory} completeMethod={search} 
                onChange={(e) => OnChangeAutocomplete(e)} />
            <label htmlFor="ac">Parent</label>
        </span>
    )
}

export default AutocompleteParentInventoryCategory