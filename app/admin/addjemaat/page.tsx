import JemaatForm from '@/components/Jemaat/JemaatForm'
import { DefaultJemaatInput } from '@/constants/jemaatConstant'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'GKim Amanat Kristus - Add Jemaat',
}

const AddJemaatPage = () => {
  return (
    <JemaatForm input={DefaultJemaatInput} />
  )
}

export default AddJemaatPage