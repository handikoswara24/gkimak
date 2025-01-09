import { RenunganHarianType } from '@/types/renunganharian'
import React from 'react'

type RenunganCardProps = {
    data: RenunganHarianType
}

const RenunganCard = ({ data }: RenunganCardProps) => {
    return (
        <div key={data._id} className='rounded-xl border border-slate-500 cursor-pointer'>
            <div>
                <img src={data.image.length > 0 ? data.image[0].url : ""} className='rounded-t-xl' />
            </div>
            <div className='space-y-2 p-4'>
                <div className='font-semibold'>
                    {data.title}
                </div>
                <div>
                    {new Date(data.date).toDateString()}
                </div>
                <div>
                    {data.verse}
                </div>
                <div>
                    Oleh : {data.author}
                </div>
            </div>

        </div>
    )
}

export default RenunganCard