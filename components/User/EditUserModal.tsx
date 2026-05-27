'use client'
import React from 'react'
import UserForm from './UserForm'
import { UserInput } from '@/types/user'
import EditModalShell from '../UI/EditModalShell'

type EditUserModalProps = {
    id: string,
    user: UserInput
}

const EditUserModal = ({ id, user }: EditUserModalProps) => {
    return (
        <EditModalShell title="Edit User">
            <UserForm user={user} id={id} />
        </EditModalShell>
    )
}

export default EditUserModal
