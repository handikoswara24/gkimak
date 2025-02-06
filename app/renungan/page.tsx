import ListRenunganPage from '@/components/RenunganHarian/ListRenunganPage'
import { Metadata } from 'next'
import React from 'react'
import "../css/home.css"

export const metadata: Metadata = {
  title: 'GKim Amanat Kristus - Renungan Harian',
}

const RenunganPage = () => {
  return (
    <ListRenunganPage />
  )
}

export default RenunganPage