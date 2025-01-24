'use client'
import { useGetAllJemaat } from '@/service/jemaat-query';
import { JemaatType } from '@/types/jemaat';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { Paginator } from 'primereact/paginator';
import { ProgressSpinner } from 'primereact/progressspinner';
import React, { useState } from 'react'
import JemaatButtons from './JemaatButtons';
import SearchBox from '../UI/SearchBox';

const ListJemaat = () => {
    const [page, setPage] = useState(1);
    const [numberPerPage, setNumberPerPage] = useState(20);
    const [search, setSearch] = useState("");
    const { data, isLoading, isFetching } = useGetAllJemaat(page, numberPerPage, search);

    const ButtonRenungan = (data: JemaatType) => {
        return (
            <JemaatButtons data={data} />
        )
    }

    const onSearch = (input: string) => {
        setSearch(input)
    }

    return (
        <div>
            <h1 className='mb-4 font-semibold text-xl'>Jemaat</h1>
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
                    <DataTable value={data?.jemaat} className='text-xs'>
                        <Column field="nomorAnggota" header="Nomor Anggota"></Column>
                        <Column field="nama" header="Nama"></Column>
                        <Column field="telepon" header="Telepon"></Column>
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

export default ListJemaat