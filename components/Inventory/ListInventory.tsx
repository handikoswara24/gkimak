'use client'
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { Paginator } from 'primereact/paginator';
import { ProgressSpinner } from 'primereact/progressspinner';
import React, { useState } from 'react'
import SearchBox from '../UI/SearchBox';
import { useGetAllInventory } from '@/service/inventory-query';
import InventoryButtons from './InventoryButtons';
import { InventoryType } from '@/types/inventory';

const ListInventory = () => {
    const [page, setPage] = useState(1);
    const [numberPerPage, setNumberPerPage] = useState(20);
    const [search, setSearch] = useState("");
    const { data, isLoading, isFetching } = useGetAllInventory(page, numberPerPage, search);

    const ButtonInventory = (data: InventoryType) => {
        return (
            <InventoryButtons data={data} />
        )
    }

    const Category = (data: InventoryType) => {
        return (
            <span>{data.categoryLookup ? data.categoryLookup.name : "-"}</span>
        )
    }

    const onSearch = (input: string) => {
        setSearch(input)
    }
    return (
        <div>
            <h1 className='mb-4 font-semibold text-xl'>Inventory</h1>
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
                    <DataTable value={data?.inventory} className='text-xs'>
                        <Column field="name" header="Name"></Column>
                        <Column field="code" header="Code"></Column>
                        <Column body={Category} header="Category"></Column>
                        <Column header="Action" body={ButtonInventory} className='w-24'></Column>
                    </DataTable>
                    <Paginator first={page - 1} style={{ scale: 0.8 }} rows={numberPerPage}
                        totalRecords={data?.pagination.total}
                        onPageChange={(event) => { setPage(event.page + 1) }} />
                </div>
            )}
        </div>
    )
}

export default ListInventory