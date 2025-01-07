import RenunganHarianForm from '@/components/RenunganHarian/RenunganHarianForm'
import { DEFAULTRENUNGANHARIAN } from '@/constants/renunganHarianConstant'
import React from 'react'

const AddRenunganHarianPage = () => {
  return (
    <RenunganHarianForm data={DEFAULTRENUNGANHARIAN} />
  )
}

export default AddRenunganHarianPage