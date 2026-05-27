import { useGetAllRenungan } from '@/service/renungan-query'
import { ProgressSpinner } from 'primereact/progressspinner';
import React, { useState } from 'react'
import RenunganCard from './RenunganCard';

const RenunganCardWrapper = () => {
    const [page, setPage] = useState(1);
    const { data, isLoading, isFetching } = useGetAllRenungan(page, 20);

    if (isLoading || isFetching) {
        return (
            <div className='flex justify-center'>
                <ProgressSpinner className='size-10' />
            </div>
        )
    }
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
            {data?.renungan && data.renungan.map((d, i) => {
                return (
                    <RenunganCard data={d} key={d._id} isFirst={i === 0} />
                )
            })}
        </div>
    )
}

export default RenunganCardWrapper