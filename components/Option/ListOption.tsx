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

  const ButtonOption = (data: OptionsType) => {
    return <OptionButtons option={data} />;
  };

  const onSearch = (input: string) => {
    setSearch(input);
  };

  return (
    <div>
      <h1 className="mb-4 font-semibold text-xl">Options</h1>
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
          <DataTable value={data?.option} className="text-xs">
            <Column field="name" header="Option"></Column>
            <Column field="description" header="Description"></Column>
            <Column field="type" header="Value"></Column>
            <Column
              header="Action"
              body={ButtonOption}
              className="w-24"
            ></Column>
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

export default ListOption;
