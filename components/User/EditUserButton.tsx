import { useModalAction } from '@/components/utils/ModalProvider'
import { User, UserInput } from '@/types/user'

import React from 'react'

type EditUserButtonProps = {
    data: User
}

const EditUserButton = ({ data }: EditUserButtonProps) => {
    const { openModal } = useModalAction();
    const userInput : UserInput = {
        password : "",
        username: data.username,
        role: data.role,
        name: data.name
    }
    return (
        <div className="mr-3">
            <i className="pi pi-user-edit text-lg text-blue-300 cursor-pointer" onClick={() => openModal("USERFORM", {id: data._id, userInput})}></i>
        </div>
    )
}

export default EditUserButton