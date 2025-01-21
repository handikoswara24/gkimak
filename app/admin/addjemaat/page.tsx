import JemaatForm from '@/components/Jemaat/JemaatForm'
import { DefaultJemaatInput } from '@/constants/jemaatConstant'
import React from 'react'

const AddJemaatPage = () => {
  return (
    <JemaatForm input={DefaultJemaatInput} />
  )
}

export default AddJemaatPage