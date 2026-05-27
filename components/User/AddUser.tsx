'use client'

import React from 'react'
import UserForm from './UserForm'
import { DefaultUserInput } from '@/constants/userConstant'
import FormCard from '../UI/FormCard'

const AddUser = () => {
    return (
        <FormCard title="Tambah User" backHref="/admin/listuser">
            <UserForm user={DefaultUserInput} />
        </FormCard>
    )
}

export default AddUser
