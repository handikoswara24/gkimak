"use client";

import { BorrowStatus } from "@/constants/borrowItemConstant";
import { useGetAllBorrowItems } from "@/service/borrow-item-query";
import { BorrowItemType } from "@/types/borrowItem";
import React, { useState } from "react";
import SearchBox from "../UI/SearchBox";
import { ProgressSpinner } from "primereact/progressspinner";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { Paginator } from "primereact/paginator";
import dayjs from "dayjs";
import BorrowItemButtons from "./BorrowItemButtons";
import AdminCard from "../UI/AdminCard";
import Link from "next/link";
import { FolderPlus } from "lucide-react";

const ListBorrowItem = () => {
  const [page, setPage] = useState(1);
  const [numberPerPage, setNumberPerPage] = useState(20);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState(0);

  const { data, isLoading, isFetching } = useGetAllBorrowItems(
    page,
    numberPerPage,
    search,
    status
  );

  const onSearch = (input: string) => {
    setPage(1);
    setSearch(input);
  };

  const statusComponent = (rowData: BorrowItemType) => {
    const label = BorrowStatus.find((e) => e.value == rowData.status)?.label ?? "-";
    const colorMap: Record<number, string> = {
      1: "bg-meta-6/10 text-meta-6",   // pending
      2: "bg-primary/10 text-primary",  // dipinjam
      3: "bg-meta-3/10 text-meta-3",    // dikembalikan
    };
    return (
      <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${colorMap[rowData.status] ?? "bg-gray-2 text-body"}`}>
        {label}
      </span>
    );
  };

  const buttonComponent = (rowData: BorrowItemType) => {
    return <BorrowItemButtons data={rowData} />;
  };

  const memberComponent = (rowData: BorrowItemType) => {
    return <span>{rowData.memberLookup.name}</span>;
  };

  const borrowDateComponent = (rowData: BorrowItemType) => {
    return <span>{dayjs(rowData.borrowDate).format("DD/MM/YYYY")}</span>;
  };

  const actualBorrowDateComponent = (rowData: BorrowItemType) => {
    return rowData.actualReturnDate ? (
      <span>{dayjs(rowData.actualReturnDate).format("DD/MM/YYYY")}</span>
    ) : (
      <span className="text-body">-</span>
    );
  };

  const dueDateComponent = (rowData: BorrowItemType) => {
    const isOverdue =
      new Date().setHours(0, 0, 0, 0) >
      new Date(rowData.returnDate).setHours(0, 0, 0, 0) &&
      rowData.status == 2;
    return (
      <span className={isOverdue ? "text-danger font-medium" : ""}>
        {dayjs(rowData.returnDate).format("DD/MM/YYYY")}
        {isOverdue && (
          <span className="ml-2 px-1.5 py-0.5 rounded text-[10px] bg-danger text-white font-semibold">
            Overdue
          </span>
        )}
      </span>
    );
  };

  const itemsComponent = (rowData: BorrowItemType) => {
    return (
      <div className="flex flex-col gap-0.5">
        {rowData.items.map((item, i) => (
          <div key={i} className="text-xs">
            {item.itemLookup.name}{" "}
            <span className="text-body">({item.quantity})</span>
          </div>
        ))}
      </div>
    );
  };

  const total = data?.pagination?.total ?? 0;

  return (
    <AdminCard
      title="Peminjaman Barang"
      description={total > 0 ? `${total} catatan peminjaman` : undefined}
      action={
        <Link
          href="/admin/addborrowitem"
          className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-primary text-white text-sm font-medium hover:bg-primary/90 transition-colors"
        >
          <FolderPlus size={15} />
          Tambah Peminjaman
        </Link>
      }
    >
      <div className="mb-4">
        <SearchBox onClickSearch={onSearch} placeholder="Cari nomor peminjaman..." />
      </div>

      {(isFetching || isLoading) ? (
        <div className="w-full flex justify-center py-12">
          <ProgressSpinner className="w-8 h-8" />
        </div>
      ) : (
        <div>
          <DataTable
            value={data?.borrowItem}
            className="text-sm"
            emptyMessage="Tidak ada data peminjaman"
            stripedRows
          >
            <Column field="borrowNumber" header="No. Pinjam" style={{ width: '130px' }} />
            <Column body={memberComponent} header="Peminjam" />
            <Column body={itemsComponent} header="Barang" />
            <Column body={borrowDateComponent} header="Tgl Pinjam" style={{ width: '110px' }} />
            <Column body={dueDateComponent} header="Tgl Kembali" style={{ width: '130px' }} />
            <Column body={actualBorrowDateComponent} header="Aktual Kembali" style={{ width: '120px' }} />
            <Column body={statusComponent} header="Status" style={{ width: '110px' }} />
            <Column field="purpose" header="Keperluan" />
            <Column body={buttonComponent} header="Aksi" style={{ width: '100px' }} />
          </DataTable>
          <div className="mt-4 flex items-center justify-between text-xs text-body">
            <span>Menampilkan {data?.borrowItem?.length ?? 0} dari {total} data</span>
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
  );
};

export default ListBorrowItem;
