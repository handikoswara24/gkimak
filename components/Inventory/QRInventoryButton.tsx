import { InventoryType } from '@/types/inventory'
import React from 'react'
import QRIcon from '../Icons/QRIcon'
import { useModalAction } from '../utils/ModalProvider'

type QRInventoryButtonProps = {
    data: InventoryType
}

const QRInventoryButton = ({ data }: QRInventoryButtonProps) => {
    const { openModal } = useModalAction();
    return (
        <div className='' onClick={() => openModal("INVENTORYQR", { data })}>
            <QRIcon className='size-5 cursor-pointer' />
        </div>
    )
}

export default QRInventoryButton