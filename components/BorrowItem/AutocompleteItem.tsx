"use client";

import { BorrowItemInput, ItemForBorrow } from "@/types/borrowItem";
import React, { useState } from "react";
import { Lookup } from "@/types/common";
import {
  AutoComplete,
  AutoCompleteChangeEvent,
  AutoCompleteCompleteEvent,
} from "primereact/autocomplete";
import { getAllInventoryLookup } from "@/service/inventory-query";
import { CircleMinus, CirclePlus, X } from "lucide-react";

type AutocompleteItemProps = {
  input: BorrowItemInput;
  setBorrowItemData: React.Dispatch<React.SetStateAction<BorrowItemInput>>;
};

type LookupItem = Lookup & { maxQty: number };

const AutocompleteItem = ({
  input,
  setBorrowItemData,
}: AutocompleteItemProps) => {
  const [selectedValue, setSelectedValue] = useState<LookupItem | null>(null);
  const [filteredCategory, setFilteredCategory] = useState<LookupItem[]>([]);

  const search = async (event: AutoCompleteCompleteEvent) => {
    // Timeout to emulate a network connection
    const result = await getAllInventoryLookup(1, 50, event.query);

    const filtered: LookupItem[] = result.inventory.map((e) => {
      return {
        collection: "inventory",
        name: e.name,
        id: e._id,
        maxQty: e.qty,
      };
    });

    setFilteredCategory(
      filtered.filter((e) => !input.items.map((e) => e.itemId).includes(e.id))
    );
  };

  const OnChangeAutocomplete = (e: AutoCompleteChangeEvent) => {
    if (typeof e.value === "string") {
      //@ts-ignore
      setSelectedValue(e.value);
    } else {
      const currentItem = input.items;

      if (!currentItem.find((c) => c.itemId === e.value.id)) {
        currentItem.push({
          itemId: e.value.id,
          itemLookup: {
            collection: "inventory",
            name: e.value.name,
            id: e.value.id,
          },
          quantity: 1,
          maxQty: e.value.maxQty,
        });

        setBorrowItemData({ ...input, items: currentItem });
        setSelectedValue(null);
      }
    }
  };

  const onDeleteItem = (item: ItemForBorrow) => {
    const currentItem = input.items.filter((e) => e.itemId != item.itemId);
    setBorrowItemData({ ...input, items: currentItem });
  };

  const onPlusIconClick = (item: ItemForBorrow) => {
    const currentItem = input.items.find((e) => e.itemId == item.itemId);

    if (!currentItem) {
      return;
    }
    const qty = currentItem?.quantity;

    if (qty + 1 > currentItem.maxQty) {
      return;
    }

    currentItem.quantity = qty + 1;
    setBorrowItemData({ ...input, items: input.items });
  };

  const onMinusIconClick = (item: ItemForBorrow) => {
    const currentItem = input.items.find((e) => e.itemId == item.itemId);

    if (!currentItem) {
      return;
    }
    const qty = currentItem?.quantity;

    if (qty - 1 < 1) {
      return;
    }

    currentItem.quantity = qty - 1;
    setBorrowItemData({ ...input, items: input.items });
  };

  return (
    <div>
      <div className="w-full">
        <AutoComplete
          inputId="ac-item"
          field="name"
          className="w-full"
          inputClassName="admin-input"
          value={selectedValue}
          suggestions={filteredCategory}
          completeMethod={search}
          onChange={(e) => OnChangeAutocomplete(e)}
          placeholder="Ketik nama barang..."
        />
      </div>

      {input.items.length > 0 && (
        <div className="mt-3 rounded-lg border border-stroke overflow-hidden">
          <div className="flex w-full bg-gray-2 text-xs font-semibold text-body px-3 py-2">
            <div className="grow">Barang</div>
            <div className="w-28 text-center">Jumlah</div>
            <div className="w-8"></div>
          </div>
          {input.items.map((item) => (
            <div
              className="flex w-full items-center border-t border-stroke px-3 py-2 text-sm"
              key={item.itemId}
            >
              <div className="grow">{item.itemLookup.name}</div>
              <div className="w-28 flex items-center justify-center gap-2">
                <CircleMinus
                  size={16}
                  className="cursor-pointer text-body hover:text-black"
                  onClick={() => onMinusIconClick(item)}
                />
                <span className="w-6 text-center font-medium">{item.quantity}</span>
                <CirclePlus
                  size={16}
                  className="cursor-pointer text-body hover:text-black"
                  onClick={() => onPlusIconClick(item)}
                />
              </div>
              <div className="w-8 flex justify-center cursor-pointer" onClick={() => onDeleteItem(item)}>
                <X size={14} className="text-danger" />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AutocompleteItem;
