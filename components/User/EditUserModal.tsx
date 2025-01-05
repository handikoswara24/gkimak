import React from 'react'
import UserForm from './UserForm'
import { UserInput } from '@/types/user'

type EditUserModalProps = {
    id: string,
    user: UserInput
}

const EditUserModal = ({ id, user }: EditUserModalProps) => {
    return (
        <div className='max-w-xl mx-auto'>
            <h1 className='text-xl font-semibold'>Edit User</h1>
            <div>
                <UserForm user={user} id={id} />
            </div>
        </div>
    )
}

export default EditUserModal