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
import AdminCard from '../UI/AdminCard';
import Link from 'next/link';
import { Plus } from 'lucide-react';

const ListInventoryCategory = () => {
    const [page, setPage] = useState(1);
    const [numberPerPage, setNumberPerPage] = useState(20);
    const [search, setSearch] = useState("");
    const { data, isLoading, isFetching } = useGetAllInventoryCategory(page, numberPerPage, search);

    const ButtonInventoryCategory = (rowData: InventoryCategoryType) => {
        return <InventoryCategoryButtons data={rowData} />
    }

    const ParentCategory = (rowData: InventoryCategoryType) => {
        return <span>{rowData.parentId ? rowData.parentLookup.name : "-"}</span>
    }

    const onSearch = (input: string) => {
        setPage(1);
        setSearch(input);
    }

    const total = data?.pagination?.total ?? 0;

    return (
        <AdminCard
            title="Kategori Inventaris"
            description={total > 0 ? `${total} kategori terdaftar` : undefined}
            action={
                <Link
                    href="/admin/addinventorycategory"
                    className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-primary text-white text-sm font-medium hover:bg-primary/90 transition-colors"
                >
                    <Plus size={15} />
                    Tambah Kategori
                </Link>
            }
        >
            <div className="mb-4">
                <SearchBox onClickSearch={onSearch} placeholder="Cari kategori..." />
            </div>

            {(isFetching || isLoading) ? (
                <div className='w-full flex justify-center py-12'>
                    <ProgressSpinner className='w-8 h-8' />
                </div>
            ) : (
                <div>
                    <DataTable value={data?.inventoryCategory} className='text-sm' emptyMessage="Tidak ada kategori" stripedRows>
                        <Column field="name" header="Kategori" />
                        <Column field="code" header="Kode" style={{ width: '120px' }} />
                        <Column body={ParentCategory} header="Parent" style={{ width: '160px' }} />
                        <Column header="Aksi" body={ButtonInventoryCategory} style={{ width: '100px' }} />
                    </DataTable>
                    <div className="mt-4 flex items-center justify-between text-xs text-body">
                        <span>Menampilkan {data?.inventoryCategory?.length ?? 0} dari {total} data</span>
                        <Paginator
                            first={(page - 1) * numberPerPage}
                            rows={numberPerPage}
                            totalRecords={total}
                            onPageChange={(event) => setPage(event.page + 1)}
                            className="!p-0"
                        />
                    </div>
                </div>
            )}
        </AdminCard>
    )
}

export default ListInventoryCategory
