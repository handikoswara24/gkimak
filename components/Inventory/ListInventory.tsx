"use client";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { Paginator } from "primereact/paginator";
import { ProgressSpinner } from "primereact/progressspinner";
import React, { useState } from "react";
import SearchBox from "../UI/SearchBox";
import { useGetAllInventory } from "@/service/inventory-query";
import InventoryButtons from "./InventoryButtons";
import { InventoryType } from "@/types/inventory";
import { Status } from "@/constants/inventoryConstant";
import AutocompleteLocationList from "./AutocompleteLocationList";
import AdminCard from "../UI/AdminCard";
import Link from "next/link";
import { PackagePlus } from "lucide-react";

const ListInventory = () => {
  const [page, setPage] = useState(1);
  const [numberPerPage, setNumberPerPage] = useState(20);
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const { data, isLoading, isFetching } = useGetAllInventory(
    page,
    numberPerPage,
    search,
    location
  );

  const ButtonInventory = (rowData: InventoryType) => {
    return <InventoryButtons data={rowData} />;
  };

  const Category = (rowData: InventoryType) => {
    return <span>{rowData.categoryLookup ? rowData.categoryLookup.name : "-"}</span>;
  };

  const statusComponent = (rowData: InventoryType) => {
    const statusLabel = Status.find((e) => e.value == rowData.status)?.label ?? "-";
    const isAvailable = Status.find((e) => e.value == rowData.status)?.label === "Available";
    return (
      <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${
        isAvailable ? "bg-meta-3/10 text-meta-3" : "bg-meta-7/10 text-meta-7"
      }`}>
        {statusLabel}
      </span>
    );
  };

  const LocationCell = (rowData: InventoryType) => {
    return <span>{rowData.locationLookup?.name ?? "-"}</span>;
  };

  const onSearch = (input: string) => {
    setPage(1);
    setSearch(input);
  };

  const total = data?.pagination?.total ?? 0;

  return (
    <AdminCard
      title="Inventaris"
      description={total > 0 ? `${total} item terdaftar` : undefined}
      action={
        <Link
          href="/admin/addinventory"
          className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-primary text-white text-sm font-medium hover:bg-primary/90 transition-colors"
        >
          <PackagePlus size={15} />
          Tambah Inventaris
        </Link>
      }
    >
      <div className="flex flex-wrap gap-3 mb-4">
        <SearchBox onClickSearch={onSearch} placeholder="Cari nama atau kode..." />
        <div className="flex items-center gap-2">
          <span className="text-sm text-body">Lokasi:</span>
          <AutocompleteLocationList input={location} setFilter={setLocation} />
        </div>
      </div>

      {(isFetching || isLoading) ? (
        <div className="w-full flex justify-center py-12">
          <ProgressSpinner className="w-8 h-8" />
        </div>
      ) : (
        <div>
          <DataTable
            value={data?.inventory}
            className="text-sm"
            emptyMessage="Tidak ada data inventaris"
            stripedRows
          >
            <Column field="name" header="Nama" />
            <Column field="code" header="Kode" style={{ width: '120px' }} />
            <Column field="qty" header="Qty" style={{ width: '70px' }} />
            <Column body={Category} header="Kategori" style={{ width: '140px' }} />
            <Column body={statusComponent} header="Status" style={{ width: '120px' }} />
            <Column body={LocationCell} header="Lokasi" style={{ width: '130px' }} />
            <Column header="Aksi" body={ButtonInventory} style={{ width: '100px' }} />
          </DataTable>
          <div className="mt-4 flex items-center justify-between text-xs text-body">
            <span>Menampilkan {data?.inventory?.length ?? 0} dari {total} data</span>
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

export default ListInventory;
