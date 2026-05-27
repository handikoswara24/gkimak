"use client";
import { useGetAllUser } from "@/service/user-query";
import { User } from "@/types/user";
import { ProgressSpinner } from "primereact/progressspinner";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Paginator } from "primereact/paginator";
import React, { useState } from "react";
import UserButtons from "./UserButtons";
import SearchBox from "../UI/SearchBox";
import AdminCard from "../UI/AdminCard";
import Link from "next/link";
import { UserPlus } from "lucide-react";

const ListUser = () => {
  const [page, setPage] = useState(1);
  const [numberPerPage, setNumberPerPage] = useState(20);
  const [search, setSearch] = useState("");
  const { data, isLoading, isFetching } = useGetAllUser(
    page,
    numberPerPage,
    search
  );

  const ButtonUser = (rowData: User) => {
    return <UserButtons data={rowData} />;
  };

  const roleComponent = (rowData: User) => {
    const colorMap: Record<string, string> = {
      admin: "bg-danger/10 text-danger",
      user: "bg-primary/10 text-primary",
      wo: "bg-meta-3/10 text-meta-3",
    };
    return (
      <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium capitalize ${colorMap[rowData.role] ?? "bg-gray-2 text-body"}`}>
        {rowData.role}
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
      title="Daftar User"
      description={total > 0 ? `${total} user terdaftar` : undefined}
      action={
        <Link
          href="/admin/adduser"
          className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-primary text-white text-sm font-medium hover:bg-primary/90 transition-colors"
        >
          <UserPlus size={15} />
          Tambah User
        </Link>
      }
    >
      <div className="mb-4">
        <SearchBox onClickSearch={onSearch} placeholder="Cari username atau nama..." />
      </div>

      {(isFetching || isLoading) ? (
        <div className="w-full flex justify-center py-12">
          <ProgressSpinner className="w-8 h-8" />
        </div>
      ) : (
        <div>
          <DataTable value={data?.users} className="text-sm" emptyMessage="Tidak ada data user" stripedRows>
            <Column field="username" header="Username" />
            <Column field="name" header="Nama" />
            <Column body={roleComponent} header="Role" style={{ width: '120px' }} />
            <Column header="Aksi" body={ButtonUser} style={{ width: '100px' }} />
          </DataTable>
          <div className="mt-4 flex items-center justify-between text-xs text-body">
            <span>Menampilkan {data?.users?.length ?? 0} dari {total} data</span>
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

export default ListUser;
