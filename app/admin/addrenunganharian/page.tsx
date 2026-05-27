import RenunganHarianForm from '@/components/RenunganHarian/RenunganHarianForm'
import FormCard from '@/components/UI/FormCard'
import { DEFAULTRENUNGANHARIAN } from '@/constants/renunganHarianConstant'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'GKim Amanat Kristus - Tambah Renungan Harian',
}

const AddRenunganHarianPage = () => {
  return (
    <FormCard title="Tambah Renungan Harian" backHref="/admin/renunganharian" maxWidth="lg">
      <RenunganHarianForm data={DEFAULTRENUNGANHARIAN} />
    </FormCard>
  )
}

export default AddRenunganHarianPage