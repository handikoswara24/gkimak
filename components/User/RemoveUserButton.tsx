
import { acceptClassName, rejectClassName } from '@/constants/cssConstant'
import { useDeleteUserMutation } from '@/service/user-query'
import { User } from '@/types/user'
import { confirmDialog } from 'primereact/confirmdialog'
import React from 'react'
import { useQueryClient } from 'react-query'
import { toast } from 'react-toastify'

type RemoveUserProps = {
    data: User
}

const RemoveUserButton = ({ data }: RemoveUserProps) => {
    const { mutate: deleteUser } = useDeleteUserMutation();
    const queryClient = useQueryClient();
    const confirm = (id: string) => {
        confirmDialog({
            message: 'Are you sure you want to delete this user?',
            header: 'Confirmation',
            icon: 'pi pi-exclamation-triangle',
            acceptClassName: acceptClassName,
            rejectClassName: rejectClassName,
            accept: () => {
                deleteUser(id, {
                    onSuccess: () => {
                        toast.success("Success delete user");
                        queryClient.invalidateQueries(['AllUser']);
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

export default RemoveUserButton