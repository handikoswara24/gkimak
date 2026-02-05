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
    setSearch(input);
  };

  const statusComponent = (data: BorrowItemType) => {
    return (
      <span>
        {BorrowStatus.find((e) => e.value == data.status)?.label ?? "-"}
      </span>
    );
  };

  const buttonComponent = (data: BorrowItemType) => {
    return <BorrowItemButtons data={data} />;
  };

  const memberComponent = (data: BorrowItemType) => {
    return <span>{data.memberLookup.name}</span>;
  };

  const borrowDateComponent = (data: BorrowItemType) => {
    return <span>{dayjs(data.borrowDate).format("YYYY-MM-DD")}</span>;
  };

  const dueDateComponent = (data: BorrowItemType) => {
    return (
      <span
        className={`${
          new Date().setHours(0, 0, 0, 0) >
          new Date(data.returnDate).setHours(0, 0, 0, 0)
            ? "text-red"
            : ""
        }`}
      >
        {dayjs(data.returnDate).format("YYYY-MM-DD")}
        {new Date().setHours(0, 0, 0, 0) >
          new Date(data.returnDate).setHours(0, 0, 0, 0) && (
          <span className={"ml-2 rounded-xl text-xs p-2 bg-red text-white"}>Overdue</span>
        )}
      </span>
    );
  };

  const itemsComponent = (data: BorrowItemType) => {
    return (
      <>
        {data.items.map((item) => {
          return (
            <div>
              {item.itemLookup.name}{" "}
              <span className="text-slate-400">({item.quantity})</span>
            </div>
          );
        })}
      </>
    );
  };

  return (
    <div>
      <h1 className="mb-4 font-semibold text-xl">Borrow Items</h1>
      <div className="mb-4">
        <SearchBox onClickSearch={onSearch} />
      </div>
      {(isFetching || isLoading) && (
        <div className="w-full flex justify-center">
          <ProgressSpinner className="w-8 h-8" />
        </div>
      )}
      {!(isFetching || isLoading) && (
        <div>
          <DataTable
            value={data?.borrowItem}
            className="text-xs"
            emptyMessage="No Data"
          >
            <Column field="borrowNumber" header="Borrow Number"></Column>
            <Column body={memberComponent} header="Member"></Column>
            <Column body={itemsComponent} header="Items"></Column>
            <Column body={borrowDateComponent} header="Borrow Date"></Column>
            <Column body={dueDateComponent} header="Due Date"></Column>
            <Column body={statusComponent} header="Status"></Column>
            <Column field="purpose" header="Purpose"></Column>
            <Column body={buttonComponent} header="Action"></Column>
          </DataTable>
          <Paginator
            first={page - 1}
            style={{ scale: 0.8 }}
            rows={numberPerPage}
            totalRecords={data?.pagination.total}
            onPageChange={(event) => {
              setPage(event.page + 1);
            }}
          />
        </div>
      )}
    </div>
  );
};

export default ListBorrowItem;
