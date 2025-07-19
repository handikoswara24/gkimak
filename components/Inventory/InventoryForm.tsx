"use client"

import React, { useState } from 'react'
import { useQueryClient } from 'react-query';
import { useModalAction } from '../utils/ModalProvider';
import { FloatLabel } from 'primereact/floatlabel';
import { InputText } from 'primereact/inputtext';
import Button from '../UI/Button';
import { toast } from 'react-toastify';
import { InventoryInput } from '@/types/inventory';
import { INVENTORYDEFAULT } from '@/constants/inventoryConstant';
import { useAddInventoryMutation, useUpdateInventoryMutation } from '@/service/inventory-query';
import { InputTextarea } from 'primereact/inputtextarea';
import AutocompleteInventoryCategory from './AutocompleteInventoryCategory';

type InventoryFormProps = {
    id?: string,
    input: InventoryInput
}

const InventoryForm = ({ id, input }: InventoryFormProps) => {
    const queryClient = useQueryClient();
    const { closeModal } = useModalAction();
    const [inventoryData, setInventoryData] = useState<InventoryInput>(input);
    const { mutate: addinventory, isLoading: loadingAdd } = useAddInventoryMutation();
    const { mutate: updateInventory, isLoading: loadingUpdate } = useUpdateInventoryMutation(id ?? "");
    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!inventoryData.name || !inventoryData.description || !inventoryData.categoryId || !inventoryData.categoryLookup) {
            toast.error("Please Fill All Fields");
            return;
        }

        if (id) {
            updateInventory(inventoryData, {
                onSuccess: (data) => {
                    toast.success("Success update inventory !");
                    queryClient.invalidateQueries({ queryKey: ["allInventory"] })
                    closeModal();
                },
                onError: (err: any) => {
                    toast.error(err?.message ?? "An Error occured")
                }
            })
        }
        else {
            addinventory(inventoryData, {
                onSuccess: (data) => {
                    toast.success("Success create inventory !");
                    setInventoryData(INVENTORYDEFAULT);
                },
                onError: (err: any) => {
                    toast.error(err?.message ?? "An Error occured")
                }
            })
        }
    }
    return (
        <div>
            {!id && (
                <div className='h-3 font-semibold mb-10'>Inventory</div>
            )}
            <form className='mt-12 space-y-8 text-xs' onSubmit={onSubmit}>
                <div className=''>
                    <FloatLabel>
                        <InputText className='rounded-xl w-full text-xs border border-slate-300 px-4 py-3' id="name" autoComplete='off'
                            value={inventoryData?.name} onChange={(e) => setInventoryData({ ...inventoryData, name: e.target.value })} />
                        <label htmlFor="name" className='-mt-[0.35rem]'>Name</label>
                    </FloatLabel>
                </div>
                <div className=''>
                    <FloatLabel>
                        <InputTextarea className='rounded-xl w-full text-xs border border-slate-300 px-4 py-3' id="description" autoComplete='off'
                            rows={5}
                            value={inventoryData?.description} onChange={(e) => setInventoryData({ ...inventoryData, description: e.target.value })} />
                        <label htmlFor="description" className='-mt-[0.35rem]'>Description</label>
                    </FloatLabel>
                </div>
                <div>
                    <AutocompleteInventoryCategory input={inventoryData} setInventoryData={setInventoryData} />
                </div>
                <div>
                    <Button type='submit' disabled={!inventoryData.name || !inventoryData.categoryId || !inventoryData.categoryLookup || loadingUpdate || loadingAdd}
                        loading={loadingAdd || loadingUpdate}
                        className='w-full border border-blue-400 text-blue-400 py-2 rounded-xl disabled:border-slate-300 disabled:text-slate-300 disabled:hover:bg-transparent disabled:hover:text-slate-300 hover:text-white hover:bg-blue-400'>
                        Submit
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default InventoryForm