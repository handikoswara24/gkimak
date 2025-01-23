'use client'
import { useGetAllUser } from '@/service/user-query';
import { User } from '@/types/user';
import { ProgressSpinner } from 'primereact/progressspinner';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Paginator } from 'primereact/paginator';
import React, { useState } from 'react'
import UserButtons from './UserButtons';
import SearchBox from '../UI/SearchBox';

const ListUser = () => {
    const [page, setPage] = useState(1);
    const [numberPerPage, setNumberPerPage] = useState(20);
    const [search, setSearch] = useState("");
    const { data, isLoading, isFetching } = useGetAllUser(page, numberPerPage, search);
    const ButtonUser = (data: User) => {
        return (
            <UserButtons data={data} />
        )
    }

    const onSearch = (input: string) => {
        setSearch(input)
    }

    return (
        <div>
            <h1 className='mb-4 font-semibold text-xl'>Users</h1>
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
                    <DataTable value={data?.users} className='text-xs'>
                        <Column field="username" header="User Name"></Column>
                        <Column field="name" header="Name"></Column>
                        <Column field="role" header="Role"></Column>
                        <Column header="Action" body={ButtonUser} className='w-24'></Column>
                    </DataTable>
                    <Paginator first={page - 1} style={{ scale: 0.8 }} rows={numberPerPage}
                        totalRecords={data?.pagination.total}
                        onPageChange={(event) => { setPage(event.page + 1) }} />
                </div>
            )}
        </div>
    )
}

export default ListUser