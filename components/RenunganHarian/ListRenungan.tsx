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
import AdminCard from '../UI/AdminCard';
import Link from 'next/link';
import { BookPlus } from 'lucide-react';
import dayjs from 'dayjs';

const ListRenungan = () => {
    const [page, setPage] = useState(1);
    const [numberPerPage, setNumberPerPage] = useState(20);
    const [search, setSearch] = useState("");
    const { data, isFetching, isLoading } = useGetAllRenunganAdmin(page, numberPerPage, search);

    const ButtonRenungan = (rowData: RenunganHarianType) => {
        return <RenunganButtons data={rowData} />
    }

    const onSearch = (input: string) => {
        setPage(1);
        setSearch(input);
    }

    const DateFormat = (rowData: RenunganHarianType) => {
        return <span>{dayjs(rowData.date).format("DD MMM YYYY")}</span>
    }

    const total = data?.pagination?.total ?? 0;

    return (
        <AdminCard
            title="Renungan Harian"
            description={total > 0 ? `${total} renungan tersimpan` : undefined}
            action={
                <Link
                    href="/admin/addrenunganharian"
                    className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-primary text-white text-sm font-medium hover:bg-primary/90 transition-colors"
                >
                    <BookPlus size={15} />
                    Tambah Renungan
                </Link>
            }
        >
            <div className="mb-4">
                <SearchBox onClickSearch={onSearch} placeholder="Cari judul atau ayat..." />
            </div>

            {(isFetching || isLoading) ? (
                <div className='w-full flex justify-center py-12'>
                    <ProgressSpinner className='w-8 h-8' />
                </div>
            ) : (
                <div>
                    <DataTable value={data?.renungan} className='text-sm' emptyMessage="Tidak ada renungan" stripedRows>
                        <Column field="title" header="Judul" />
                        <Column field="verse" header="Ayat" style={{ width: '160px' }} />
                        <Column field="author" header="Pembuat" style={{ width: '140px' }} />
                        <Column body={DateFormat} header="Tanggal" style={{ width: '120px' }} />
                        <Column header="Aksi" body={ButtonRenungan} style={{ width: '100px' }} />
                    </DataTable>
                    <div className="mt-4 flex items-center justify-between text-xs text-body">
                        <span>Menampilkan {data?.renungan?.length ?? 0} dari {total} data</span>
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

export default ListRenungan
