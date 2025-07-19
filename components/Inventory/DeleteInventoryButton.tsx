import { acceptClassName, rejectClassName } from '@/constants/cssConstant'
import { useDeleteInventoryMutation } from '@/service/inventory-query'
import { InventoryType } from '@/types/inventory'
import { confirmDialog } from 'primereact/confirmdialog'
import React from 'react'
import { useQueryClient } from 'react-query'
import { toast } from 'react-toastify'

type DeleteInventoryButtonProps = {
    data: InventoryType
}

const DeleteInventoryButton = ({ data }: DeleteInventoryButtonProps) => {
    const { mutate: DeleteInventory } = useDeleteInventoryMutation();
    const queryClient = useQueryClient();
    const confirm = (id: string) => {
        confirmDialog({
            message: 'Are you sure you want to delete?',
            header: 'Confirmation',
            icon: 'pi pi-exclamation-triangle',
            acceptClassName: acceptClassName,
            rejectClassName: rejectClassName,
            accept: () => {
                DeleteInventory(id, {
                    onSuccess: () => {
                        toast.success("Success");
                        queryClient.invalidateQueries(['allInventory']);
                    },
                    onError: (err) => {
                        toast.error("Error when delete inventory ");
                    }
                })
            }
        });
    }
    return (
        <div>
            <i className="pi pi-trash text-lg text-pink-400 cursor-pointer" onClick={() => { confirm(data._id) }}></i>
        </div>
    )
}

export default DeleteInventoryButton