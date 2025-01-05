import React from 'react'
import EditUserButton from './EditUserButton'
import RemoveUserButton from './RemoveUserButton'
import ResetPasswordUser from './ResetPasswordUser'
import { User } from '@/types/user'

type UserButtonsProps = {
    data: User
}

const UserButtons = ({ data }: UserButtonsProps) => {
    return (
        <div className='flex flex-row'>
            <EditUserButton data={data} />
            <RemoveUserButton data={data} />
            <ResetPasswordUser data={data} />
        </div>
    )
}

export default UserButtons