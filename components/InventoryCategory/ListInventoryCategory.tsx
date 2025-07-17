'use client'
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { Paginator } from 'primereact/paginator';
import { ProgressSpinner } from 'primereact/progressspinner';
import React, { useState } from 'react'
import SearchBox from '../UI/SearchBox';
import InventoryCategoryButtons from './InventoryCategoryButtons';
import { useGetAllInventoryCategory } from '@/service/inventorycategory-query';
import { InventoryCategoryType } from '@/types/inventoryCategory';


const ListInventoryCategory = () => {
    const [page, setPage] = useState(1);
    const [numberPerPage, setNumberPerPage] = useState(20);
    const [search, setSearch] = useState("");
    const { data, isLoading, isFetching } = useGetAllInventoryCategory(page, numberPerPage, search);

    const ButtonInventoryCategory = (data: InventoryCategoryType) => {
        return (
            <InventoryCategoryButtons data={data} />
        )
    }

    const ParentCategory = (data: InventoryCategoryType) => {
        return (
            <span>{data.parentId ? data.parentLookup.name : "-"}</span>
        )
    }

    const onSearch = (input: string) => {
        setSearch(input)
    }

    return (
        <div>
            <h1 className='mb-4 font-semibold text-xl'>Inventory Category</h1>
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
                    <DataTable value={data?.inventoryCategory} className='text-xs'>
                        <Column field="name" header="Category"></Column>
                        <Column field="code" header="Code"></Column>
                        <Column body={ParentCategory} header="Parent"></Column>
                        <Column header="Action" body={ButtonInventoryCategory} className='w-24'></Column>
                    </DataTable>
                    <Paginator first={page - 1} style={{ scale: 0.8 }} rows={numberPerPage}
                        totalRecords={data?.pagination.total}
                        onPageChange={(event) => { setPage(event.page + 1) }} />
                </div>
            )}
        </div>
    )
}

export default ListInventoryCategory