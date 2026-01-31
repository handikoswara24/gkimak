"use client";
import { BorrowItemInput } from "@/types/borrowItem";
import React, { useEffect, useState } from "react";
import { Lookup } from "@/types/common";
import {
  AutoComplete,
  AutoCompleteChangeEvent,
  AutoCompleteCompleteEvent,
} from "primereact/autocomplete";
import { getAllJemaat } from "@/service/jemaat-query";

type AutocompleteMemberProps = {
  input: BorrowItemInput;
  setBorrowItemData: React.Dispatch<React.SetStateAction<BorrowItemInput>>;
};

const AutocompleteMember = ({
  input,
  setBorrowItemData,
}: AutocompleteMemberProps) => {
  const [selectedValue, setSelectedValue] = useState<Lookup | null>(
    input.memberLookup
  );
  const [filteredCategory, setFilteredCategory] = useState<Lookup[]>([]);

  useEffect(() => {
    if (!input.memberLookup) {
      setSelectedValue(null);
    }
  }, [input.memberId, input.memberLookup]);

  const search = async (event: AutoCompleteCompleteEvent) => {
    // Timeout to emulate a network connection
    const result = await getAllJemaat(1, 50, event.query);

    const filtered: Lookup[] = result.jemaat.map((e) => {
      return {
        collection: "inventorycategory",
        name: e.nama,
        id: e._id,
      };
    });

    setFilteredCategory(filtered);
  };

  const OnChangeAutocomplete = (e: AutoCompleteChangeEvent) => {
    if (typeof e.value === "string") {
      if (!e.value) {
        setBorrowItemData({ ...input, memberId: null, memberLookup: null });
      }
    } else {
      setBorrowItemData({
        ...input,
        memberLookup: e.value,
        memberId: e.value.id,
      });
    }
    setSelectedValue(e.value);
  };
  return (
    <span className="p-float-label w-full">
      <AutoComplete
        inputId="ac"
        field="name"
        className="w-full"
        inputClassName="rounded-xl w-full text-xs border border-slate-300 px-4 py-3"
        value={selectedValue}
        suggestions={filteredCategory}
        completeMethod={search}
        onChange={(e) => OnChangeAutocomplete(e)}
      />
      <label htmlFor="ac">Member</label>
    </span>
  );
};

export default AutocompleteMember;
