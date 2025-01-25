import ListJemaat from '@/components/Jemaat/ListJemaat'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'GKim Amanat Kristus - Jemaat',
}

const ListJemaatPage = () => {
  return (
    <ListJemaat />
  )
}

export default ListJemaatPage