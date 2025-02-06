import { RenunganHarianType } from '@/types/renunganharian'
import React from 'react'

type RenunganHarianDetailProps = {
    data: RenunganHarianType
}

const RenunganHarianDetail = ({ data }: RenunganHarianDetailProps) => {
    return (
        <div className='flex justify-center'>
            <div className='max-w-100 space-y-4'>
                <div>
                    <img src={data.image[0].url} />
                </div>
                <div className='text-center text-2xl font-semibold'>
                    {data.title}
                </div>
                <div className='text-center'>
                    {data.verse}
                </div>
                <div dangerouslySetInnerHTML={{ __html: data.content }} className='text-justify'>

                </div>
                <div className='text-xs'>
                    Oleh : {data.author}
                </div>
            </div>
        </div>
    )
}

export default RenunganHarianDetail