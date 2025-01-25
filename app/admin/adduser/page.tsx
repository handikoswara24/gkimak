import AddUser from '@/components/User/AddUser'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'GKim Amanat Kristus - Add User',
}

const AddUserPage = () => {
  return (
    <AddUser />
  )
}

export default AddUserPage