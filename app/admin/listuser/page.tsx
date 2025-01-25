import ListUser from '@/components/User/ListUser'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'GKim Amanat Kristus - User',
}

const ListUserPage = () => {
  return (
    <ListUser />
  )
}

export default ListUserPage