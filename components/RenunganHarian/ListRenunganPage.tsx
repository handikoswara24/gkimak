'use client'

import React from 'react'
import RenunganCardWrapper from './RenunganCardWrapper'

const ListRenunganPage = () => {
  return (
    <div>
        <div className='text-2xl my-4 font-semibold text-center'>Renungan Harian</div>

        <div>
            <RenunganCardWrapper />
        </div>
    </div>
  )
}

export default ListRenunganPage