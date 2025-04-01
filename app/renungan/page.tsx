import ListRenunganPage from '@/components/RenunganHarian/ListRenunganPage'
import { Metadata } from 'next'
import React from 'react'
import Renungan from '@/components/RenunganHarian/Renungan'
import "../css/devotion.css"

export const metadata: Metadata = {
  title: 'GKim Amanat Kristus - Renungan Harian',
}

const RenunganPage = () => {
  return (
    <Renungan />
  )
}

export default RenunganPage