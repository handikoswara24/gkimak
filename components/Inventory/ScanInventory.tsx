'use client'

import { useGetInventoryByCode } from '@/service/inventory-query';
import React, { useState } from 'react'
import Html5QrcodePlugin from '../utils/Html5QrcodePlugin';
import { ProgressSpinner } from 'primereact/progressspinner';
import InventoryDisplay from './InventoryDisplay';

const ScanInventory = () => {
    const [code, setCode] = useState("");

    const { data, isLoading, isFetching } = useGetInventoryByCode(code);
    return (
        <div>
            <div className='text-3xl text-center mb-4 font-semibold'>Scan Inventory QR</div>
            <div className='mb-4'>
                <Html5QrcodePlugin
                    //@ts-ignore
                    fps={10}
                    qrbox={250}
                    disableFlip={false}
                    qrCodeSuccessCallback={(e: any) => setCode(e)} />
            </div>

            {(isLoading || isFetching) && (
                <div className='w-full flex justify-center'>
                    <ProgressSpinner className='w-8 h-8' />
                </div>
            )}

            {!(isLoading || isFetching) && data && (
                <div>
                    <InventoryDisplay inventory={data.result} />
                </div>
            )}

             {code && !(isLoading || isFetching) && !data && (
                <div>
                    Not Found!
                </div>
            )}
        </div>
    )
}

export default ScanInventory