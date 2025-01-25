import RenunganHarianForm from '@/components/RenunganHarian/RenunganHarianForm'
import { DEFAULTRENUNGANHARIAN } from '@/constants/renunganHarianConstant'
import { Metadata } from 'next'
import React from 'react'
export const metadata: Metadata = {
  title: 'GKim Amanat Kristus - Add Renungan Harian',
}

const AddRenunganHarianPage = () => {
  return (
    <RenunganHarianForm data={DEFAULTRENUNGANHARIAN} />
  )
}

export default AddRenunganHarianPage