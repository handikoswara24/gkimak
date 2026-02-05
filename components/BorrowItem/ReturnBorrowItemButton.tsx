import { BorrowItemType } from '@/types/borrowItem'
import { FolderInput } from 'lucide-react'
import React from 'react'

type ReturnBorrowItemButtonProps = {
    data: BorrowItemType
}

const ReturnBorrowItemButton = ({data} : ReturnBorrowItemButtonProps) => {
  return (
    <div className='cursor-pointer'>
        <FolderInput className='size-5 text-green-400' />
    </div>
  )
}

export default ReturnBorrowItemButton