import React, { useEffect, useState } from "react";
import {
  AutoComplete,
  AutoCompleteChangeEvent,
  AutoCompleteCompleteEvent,
} from "primereact/autocomplete";
import { Lookup } from "@/types/common";
import { getAllOptions } from "@/service/option-query";

type AutocompleteLocationProps = {
  input: string;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
};

const AutocompleteLocationList = ({
  input,
  setFilter,
}: AutocompleteLocationProps) => {
  const [selectedValue, setSelectedValue] = useState<Lookup | null>(null);
  const [filteredLocation, setFilteredLocation] = useState<Lookup[]>([]);

  useEffect(() => {
    if (!input) {
      setSelectedValue(null);
    }
  }, [input]);

  const search = async (event: AutoCompleteCompleteEvent) => {
    // Timeout to emulate a network connection
    const result = await getAllOptions(1, 50, event.query, "1");

    const filtered: Lookup[] = result.option.map((e) => {
      return {
        collection: "options",
        name: e.name,
        id: e._id,
      };
    });

    setFilteredLocation(filtered);
  };

  const OnChangeAutocomplete = (e: AutoCompleteChangeEvent) => {
    if (typeof e.value === "string") {
      if (!e.value) {
        setFilter("");
      }
    } else {
      setFilter(e.value.id);
    }
    setSelectedValue(e.value);
  };
  return (
    <AutoComplete
      inputId="ac-loc"
      field="name"
      className="w-full"
      inputClassName="rounded-xl w-full text-xs border border-slate-300 px-4 py-3"
      value={selectedValue}
      suggestions={filteredLocation}
      completeMethod={search}
      onChange={(e) => OnChangeAutocomplete(e)}
    />
  );
};

export default AutocompleteLocationList;
