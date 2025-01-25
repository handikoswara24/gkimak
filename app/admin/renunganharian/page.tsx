import ListRenungan from '@/components/RenunganHarian/ListRenungan'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'GKim Amanat Kristus - Renungan Harian',
}

const RenunganHarianPage = () => {
  return (
    <ListRenungan />
  )
}

export default RenunganHarianPage