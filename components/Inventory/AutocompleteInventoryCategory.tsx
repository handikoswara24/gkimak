"use client";

import { getAllInventoryCategory } from "@/service/inventorycategory-query";
import { Lookup } from "@/types/common";
import { InventoryInput } from "@/types/inventory";
import {
  AutoComplete,
  AutoCompleteChangeEvent,
  AutoCompleteCompleteEvent,
} from "primereact/autocomplete";
import React, { useEffect, useState } from "react";

type AutocompleteInventoryCategoryProps = {
  input: InventoryInput;
  setInventoryData: React.Dispatch<React.SetStateAction<InventoryInput>>;
};
const AutocompleteInventoryCategory = ({
  input,
  setInventoryData,
}: AutocompleteInventoryCategoryProps) => {
  const [selectedValue, setSelectedValue] = useState<Lookup | null>(
    input.categoryLookup
  );
  const [filteredCategory, setFilteredCategory] = useState<Lookup[]>([]);

  useEffect(() => {
    if (!input.categoryId) {
      setSelectedValue(null);
    }
  }, [input.categoryId, input.categoryLookup]);

  const search = async (event: AutoCompleteCompleteEvent) => {
    // Timeout to emulate a network connection
    const result = await getAllInventoryCategory(1, 50, event.query);

    const filtered: Lookup[] = result.inventoryCategory.map((e) => {
      return {
        collection: "inventorycategory",
        name: e.name,
        id: e._id,
      };
    });

    setFilteredCategory(filtered);
  };

  const OnChangeAutocomplete = (e: AutoCompleteChangeEvent) => {
    if (typeof e.value === "string") {
      if (!e.value) {
        setInventoryData({ ...input, categoryId: null, categoryLookup: null });
      }
    } else {
      setInventoryData({
        ...input,
        categoryLookup: e.value,
        categoryId: e.value.id,
      });
    }
    setSelectedValue(e.value);
  };

  return (
    <AutoComplete
      inputId="ac"
      field="name"
      className="w-full"
      inputClassName="admin-input"
      value={selectedValue}
      suggestions={filteredCategory}
      completeMethod={search}
      onChange={(e) => OnChangeAutocomplete(e)}
      placeholder="Ketik untuk mencari kategori..."
    />
  );
};

export default AutocompleteInventoryCategory;
