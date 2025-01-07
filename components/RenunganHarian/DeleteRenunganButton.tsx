
import { acceptClassName, rejectClassName } from '@/constants/cssConstant'
import { useDeleteRenunganMutation } from '@/service/renungan-query'
import { RenunganHarianType } from '@/types/renunganharian'
import { confirmDialog } from 'primereact/confirmdialog'
import React from 'react'
import { useQueryClient } from 'react-query'
import { toast } from 'react-toastify'

type DeleteRenunganProps = {
    data: RenunganHarianType
}

const DeleteRenunganButton = ({ data }: DeleteRenunganProps) => {
    const { mutate: deleteRenungan } = useDeleteRenunganMutation();
    const queryClient = useQueryClient();
    const confirm = (id: string) => {
        confirmDialog({
            message: 'Are you sure you want to delete?',
            header: 'Confirmation',
            icon: 'pi pi-exclamation-triangle',
            acceptClassName: acceptClassName,
            rejectClassName: rejectClassName,
            accept: () => {
                deleteRenungan(id, {
                    onSuccess: () => {
                        toast.success("Success delete renungan");
                        queryClient.invalidateQueries(['allRenunganAdmin']);
                    },
                    onError: (err) => {
                        toast.error("Error when delete user");
                    }
                })
            }
        });
    }

    return (
        <div>
            <div className='hidden border border-blue-500 outline-none text-blue-500 bg-white px-4 ml-3 py-2 !rounded-xl'></div>
            <i className="pi pi-trash text-lg text-pink-400 cursor-pointer" onClick={() => { confirm(data._id) }}></i>
        </div>
    )
}

export default DeleteRenunganButton