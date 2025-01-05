'use client'

import React from 'react'
import UserForm from './UserForm'
import { DefaultUserInput } from '@/constants/userConstant'

const AddUser = () => {
    return (
        <div>
            <h1 className='mb-4 text-xl font-semibold'>Add User</h1>
            <UserForm user={DefaultUserInput} />
        </div>
    )
}

export default AddUser