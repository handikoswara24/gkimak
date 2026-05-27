"use client";

import { useGetAllOptions } from "@/service/option-query";
import React, { useState } from "react";
import { ProgressSpinner } from "primereact/progressspinner";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Paginator } from "primereact/paginator";
import SearchBox from "../UI/SearchBox";
import { OptionsType } from "@/types/options";
import OptionButtons from "./OptionButtons";
import { OptionTypeList } from "@/constants/optionConstant";
import AdminCard from "../UI/AdminCard";
import Link from "next/link";
import { Plus } from "lucide-react";

const ListOption = () => {
  const [page, setPage] = useState(1);
  const [numberPerPage, setNumberPerPage] = useState(20);
  const [search, setSearch] = useState("");
  const { data, isLoading, isFetching } = useGetAllOptions(
    page,
    numberPerPage,
    search,
    ""
  );

  const ButtonOption = (rowData: OptionsType) => {
    return <OptionButtons option={rowData} />;
  };

  const TypeComponent = (rowData: OptionsType) => {
    return (
      <span>
        {OptionTypeList.find((e) => e.value == Number(rowData.type ?? 1))?.label ?? "-"}
      </span>
    );
  };

  const onSearch = (input: string) => {
    setPage(1);
    setSearch(input);
  };

  const total = data?.pagination?.total ?? 0;

  return (
    <AdminCard
      title="Options"
      description={total > 0 ? `${total} option terdaftar` : undefined}
      action={
        <Link
          href="/admin/addoption"
          className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-primary text-white text-sm font-medium hover:bg-primary/90 transition-colors"
        >
          <Plus size={15} />
          Tambah Option
        </Link>
      }
    >
      <div className="mb-4">
        <SearchBox onClickSearch={onSearch} placeholder="Cari option..." />
      </div>

      {(isFetching || isLoading) ? (
        <div className="w-full flex justify-center py-12">
          <ProgressSpinner className="w-8 h-8" />
        </div>
      ) : (
        <div>
          <DataTable value={data?.option} className="text-sm" emptyMessage="Tidak ada data option" stripedRows>
            <Column field="name" header="Option" />
            <Column field="description" header="Deskripsi" />
            <Column body={TypeComponent} header="Tipe" style={{ width: '120px' }} />
            <Column header="Aksi" body={ButtonOption} style={{ width: '100px' }} />
          </DataTable>
          <div className="mt-4 flex items-center justify-between text-xs text-body">
            <span>Menampilkan {data?.option?.length ?? 0} dari {total} data</span>
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

export default ListOption;
