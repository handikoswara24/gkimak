"use client"

import React, { useState } from 'react'
import { useQueryClient } from 'react-query';
import { useModalAction } from '../utils/ModalProvider';
import { FloatLabel } from 'primereact/floatlabel';
import { InputText } from 'primereact/inputtext';
import Button from '../UI/Button';
import { toast } from 'react-toastify';
import { InventoryCategoryInput } from '@/types/inventoryCategory';
import { useAddInventoryCategoryMutation, useUpdateInventoryCategoryMutation } from '@/service/inventorycategory-query';
import { DEFAULTINVENTORYCATEGORY } from '@/constants/inventoryCategoryConstant';

type InventoryCategoryFormProps = {
    id?: string,
    input: InventoryCategoryInput
}

const InventoryCategoryForm = ({ input, id }: InventoryCategoryFormProps) => {
    const queryClient = useQueryClient();
    const { closeModal } = useModalAction();
    const [inventoryCategoryData, setInventoryCategoryData] = useState<InventoryCategoryInput>(input);
    const { mutate: addinventorycategory, isLoading: loadingAdd } = useAddInventoryCategoryMutation();
    const { mutate: updateInventoryCategory, isLoading: loadingUpdate } = useUpdateInventoryCategoryMutation(id ?? "");
    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!inventoryCategoryData.name || !inventoryCategoryData.code) {
            toast.error("Please Fill All Fields");
            return;
        }

        if (id) {
            updateInventoryCategory(inventoryCategoryData, {
                onSuccess: (data) => {
                    toast.success("Success update inventory category!");
                    queryClient.invalidateQueries({ queryKey: ["allInventoryCategory"] })
                    closeModal();
                },
                onError: (err: any) => {
                    toast.error(err?.message ?? "An Error occured")
                }
            })
        }
        else {
            addinventorycategory(inventoryCategoryData, {
                onSuccess: (data) => {
                    toast.success("Success create jemaat!");
                    setInventoryCategoryData(DEFAULTINVENTORYCATEGORY);
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
                <div className='h-3 font-semibold mb-10'>Inventory Category</div>
            )}
            <form className='mt-12 space-y-8 text-xs' onSubmit={onSubmit}>
                <div className=''>
                    <FloatLabel>
                        <InputText className='rounded-xl w-full text-xs border border-slate-300 px-4 py-3' id="name" autoComplete='off'
                            value={inventoryCategoryData?.name} onChange={(e) => setInventoryCategoryData({ ...inventoryCategoryData, name: e.target.value })} />
                        <label htmlFor="name" className='-mt-[0.35rem]'>Category</label>
                    </FloatLabel>
                </div>
                <div className=''>
                    <FloatLabel>
                        <InputText className='rounded-xl w-full text-xs border border-slate-300 px-4 py-3' id="code" autoComplete='off'
                            value={inventoryCategoryData?.code} onChange={(e) => setInventoryCategoryData({ ...inventoryCategoryData, code: e.target.value })} />
                        <label htmlFor="name" className='-mt-[0.35rem]'>Code</label>
                    </FloatLabel>
                </div>
                
                <div>
                    <Button type='submit' disabled={!inventoryCategoryData.name || !inventoryCategoryData.code || loadingUpdate || loadingAdd}
                        loading={loadingAdd || loadingUpdate}
                        className='w-full border border-blue-400 text-blue-400 py-2 rounded-xl disabled:border-slate-300 disabled:text-slate-300 disabled:hover:bg-transparent disabled:hover:text-slate-300 hover:text-white hover:bg-blue-400'>
                        Submit
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default InventoryCategoryForm