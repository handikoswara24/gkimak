import { acceptClassName, rejectClassName } from '@/constants/cssConstant'
import { useDeleteJemaatMutation } from '@/service/jemaat-query'
import { JemaatType } from '@/types/jemaat'
import { confirmDialog } from 'primereact/confirmdialog'
import React from 'react'
import { useQueryClient } from 'react-query'
import { toast } from 'react-toastify'

type DeleteJemaatButtonProps = {
    data: JemaatType
}

const DeleteJemaatButton = ({ data }: DeleteJemaatButtonProps) => {
    const {mutate: DeleteJemaat} = useDeleteJemaatMutation();
    const queryClient = useQueryClient();
     const confirm = (id: string) => {
            confirmDialog({
                message: 'Are you sure you want to delete?',
                header: 'Confirmation',
                icon: 'pi pi-exclamation-triangle',
                acceptClassName: acceptClassName,
                rejectClassName: rejectClassName,
                accept: () => {
                    DeleteJemaat(id, {
                        onSuccess: () => {
                            toast.success("Success");
                            queryClient.invalidateQueries(['allJemaat']);
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

export default DeleteJemaatButton