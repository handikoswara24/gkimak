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
          <label htmlFor="ac">Item</label>
        </span>
      </div>
      <div className="w-full mt-4 px-4">
        {input.items.length > 0 && (
          <div className="flex w-full font-semibold">
            <div className="grow p-2">Item</div>
            <div className="w-24 text-right p-2">Quantity</div>
            <div className="w-8 p-2"></div>
          </div>
        )}
        {input.items.map((item) => {
          return (
            <div
              className="flex w-full border-t border-gray-400"
              key={item.itemId}
            >
              <div className="grow p-2">{item.itemLookup.name}</div>
              <div className="w-32 text-right p-2 flex justify-end">
                <CircleMinus
                  className="w-4 -top-1 relative cursor-pointer"
                  onClick={() => onMinusIconClick(item)}
                />
                <span className="mx-2">{item.quantity}</span>
                <CirclePlus
                  className="w-4 -top-1 relative cursor-pointer"
                  onClick={() => onPlusIconClick(item)}
                />
              </div>
              <div
                className="w-8 p-2 flex relative -top-1 cursor-pointer"
                onClick={() => onDeleteItem(item)}
              >
                <X className="w-4 text-red" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AutocompleteItem;
