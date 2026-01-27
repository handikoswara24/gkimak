import { InventoryInput } from '@/types/inventory';
import React, { useEffect, useState } from 'react'
import {
  AutoComplete,
  AutoCompleteChangeEvent,
  AutoCompleteCompleteEvent,
} from "primereact/autocomplete";
import { Lookup } from '@/types/common';
import { getAllOptions } from '@/service/option-query';

type AutocompleteLocationProps = {
  input: InventoryInput;
  setInventoryData: React.Dispatch<React.SetStateAction<InventoryInput>>;
};

const AutocompleteLocation = ({input, setInventoryData} : AutocompleteLocationProps) => {
  const [selectedValue, setSelectedValue] = useState<Lookup | null>(
    input.locationLookup
  );
  const [filteredLocation, setFilteredLocation] = useState<Lookup[]>([]);

  useEffect(() => {
    if (!input.locationId) {
      setSelectedValue(null);
    }
  }, [input.locationId, input.locationLookup]);

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
        setInventoryData({ ...input, locationLookup: null, locationId: null });
      }
    } else {
      setInventoryData({
        ...input,
        locationLookup: e.value,
        locationId: e.value.id,
      });
    }
    setSelectedValue(e.value);
  };
  return (
    <span className="p-float-label w-full">
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
    <label htmlFor="ac-loc">Location</label>
  </span>
  )
}

export default AutocompleteLocation