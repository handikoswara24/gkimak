import { acceptClassName, rejectClassName } from '@/constants/cssConstant'
import { useResetPasswordMutation } from '@/service/user-query'
import { User } from '@/types/user'
import { confirmDialog } from 'primereact/confirmdialog'
import React from 'react'
import { toast } from 'react-toastify'

type ResetPasswordUserProps = {
    data: User
}

const ResetPasswordUser = ({ data }: ResetPasswordUserProps) => {
    const { mutate: resetPassword } = useResetPasswordMutation();
    const confirm = (id: string) => {
        confirmDialog({
            message: 'Are you sure you want to reset password?',
            header: 'Confirmation',
            icon: 'pi pi-exclamation-triangle',
            acceptClassName: acceptClassName,
            rejectClassName: rejectClassName,
            accept: () => {
                resetPassword(id, {
                    onSuccess: () => {
                        toast.success("Success reset password");
                    },
                    onError: (err) => {
                        toast.error("Error when reset password");
                    }
                })
            }
        });
    }
    return (
        <div>
            <div className='hidden border border-blue-500 outline-none text-blue-500 bg-white px-4 ml-3 py-2 !rounded-xl'></div>
            <i className="pi pi-key ml-2 text-lg text-green-500 cursor-pointer" onClick={() => { confirm(data._id) }}></i>
        </div>
    )
}

export default ResetPasswordUser