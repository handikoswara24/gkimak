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
import AdminCard from '../UI/AdminCard';
import Link from 'next/link';
import { UserPlus } from 'lucide-react';

const ListJemaat = () => {
    const [page, setPage] = useState(1);
    const [numberPerPage, setNumberPerPage] = useState(20);
    const [search, setSearch] = useState("");
    const { data, isLoading, isFetching } = useGetAllJemaat(page, numberPerPage, search);

    const ButtonRenungan = (rowData: JemaatType) => {
        return <JemaatButtons data={rowData} />
    }

    const onSearch = (input: string) => {
        setPage(1);
        setSearch(input);
    }

    const total = data?.pagination?.total ?? 0;

    return (
        <AdminCard
            title="Data Jemaat"
            description={total > 0 ? `${total} jemaat terdaftar` : undefined}
            action={
                <Link
                    href="/admin/addjemaat"
                    className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-primary text-white text-sm font-medium hover:bg-primary/90 transition-colors"
                >
                    <UserPlus size={15} />
                    Tambah Jemaat
                </Link>
            }
        >
            <div className="mb-4">
                <SearchBox onClickSearch={onSearch} placeholder="Cari nama atau nomor anggota..." />
            </div>

            {(isFetching || isLoading) ? (
                <div className='w-full flex justify-center py-12'>
                    <ProgressSpinner className='w-8 h-8' />
                </div>
            ) : (
                <div>
                    <DataTable
                        value={data?.jemaat}
                        className='text-sm'
                        emptyMessage="Tidak ada data jemaat"
                        stripedRows
                    >
                        <Column field="nomorAnggota" header="No. Anggota" style={{ width: '140px' }} />
                        <Column field="nama" header="Nama" />
                        <Column field="telepon" header="Telepon" style={{ width: '150px' }} />
                        <Column header="Aksi" body={ButtonRenungan} style={{ width: '100px' }} />
                    </DataTable>
                    <div className="mt-4 flex items-center justify-between text-xs text-body">
                        <span>
                            Menampilkan {data?.jemaat?.length ?? 0} dari {total} data
                        </span>
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

export default ListJemaat
