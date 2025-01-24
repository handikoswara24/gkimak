'use client'
import { RenunganHarianType } from '@/types/renunganharian';
import React, { useState } from 'react'
import RenunganButtons from './RenunganButtons';
import { useGetAllRenunganAdmin } from '@/service/renungan-query';
import { ProgressSpinner } from 'primereact/progressspinner';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Paginator } from 'primereact/paginator';
import SearchBox from '../UI/SearchBox';

const ListRenungan = () => {
    const [page, setPage] = useState(1);
    const [numberPerPage, setNumberPerPage] = useState(20);
    const [search, setSearch] = useState("");
    const { data, isFetching, isLoading } = useGetAllRenunganAdmin(page, numberPerPage, search);

    const ButtonRenungan = (data: RenunganHarianType) => {
        return (
            <RenunganButtons data={data} />
        )
    }

    const onSearch = (input: string) => {
        setSearch(input)
    }

    const DateFormat = (data: RenunganHarianType) => {
        return (
            <div>{new Date(data.date).toDateString()}</div>
        )
    }

    return (
        <div>
            <h1 className='mb-4 font-semibold text-xl'>Renungan</h1>
            <div>
                <SearchBox onClickSearch={onSearch} />
            </div>
            {(isFetching || isLoading) && (
                <div className='w-full flex justify-center'>
                    <ProgressSpinner className='w-8 h-8' />
                </div>
            )}
            {!(isFetching || isLoading) && (
                <div>
                    <DataTable value={data?.renungan} className='text-xs'>
                        <Column field="title" header="Judul"></Column>
                        <Column field="verse" header="Ayat"></Column>
                        <Column field="author" header="Pembuat"></Column>
                        <Column body={DateFormat} header="Tangal"></Column>
                        <Column header="Action" body={ButtonRenungan} className='w-24'></Column>
                    </DataTable>
                    <Paginator first={page - 1} style={{ scale: 0.8 }} rows={numberPerPage}
                        totalRecords={data?.pagination.total}
                        onPageChange={(event) => { setPage(event.page + 1) }} />
                </div>
            )}
        </div>
    )
}

export default ListRenungan