import JemaatForm from '@/components/Jemaat/JemaatForm'
import FormCard from '@/components/UI/FormCard'
import { DefaultJemaatInput } from '@/constants/jemaatConstant'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'GKim Amanat Kristus - Tambah Jemaat',
}

const AddJemaatPage = () => {
  return (
    <FormCard title="Tambah Jemaat" backHref="/admin/jemaat">
      <JemaatForm input={DefaultJemaatInput} />
    </FormCard>
  )
}

export default AddJemaatPage