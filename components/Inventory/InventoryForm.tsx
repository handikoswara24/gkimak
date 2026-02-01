"use client";

import React, { useState } from "react";
import { useQueryClient } from "react-query";
import { useModalAction } from "../utils/ModalProvider";
import { FloatLabel } from "primereact/floatlabel";
import { InputText } from "primereact/inputtext";
import Button from "../UI/Button";
import { toast } from "react-toastify";
import { InventoryInput } from "@/types/inventory";
import {
  Condition,
  INVENTORYDEFAULT,
  Status,
} from "@/constants/inventoryConstant";
import {
  useAddInventoryMutation,
  useUpdateInventoryMutation,
} from "@/service/inventory-query";
import { InputTextarea } from "primereact/inputtextarea";
import AutocompleteInventoryCategory from "./AutocompleteInventoryCategory";
import { Dropdown, DropdownChangeEvent } from "primereact/dropdown";
import AutocompleteLocation from "./AutocompleteLocation";

type InventoryFormProps = {
  id?: string;
  input: InventoryInput;
};

const InventoryForm = ({ id, input }: InventoryFormProps) => {
  const queryClient = useQueryClient();
  const { closeModal } = useModalAction();
  const [inventoryData, setInventoryData] = useState<InventoryInput>(input);
  const { mutate: addinventory, isLoading: loadingAdd } =
    useAddInventoryMutation();
  const { mutate: updateInventory, isLoading: loadingUpdate } =
    useUpdateInventoryMutation(id ?? "");
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !inventoryData.name ||
      !inventoryData.description ||
      !inventoryData.categoryId ||
      !inventoryData.categoryLookup ||
      !inventoryData.qty
    ) {
      toast.error("Please Fill All Fields");
      return;
    }

    if (id) {
      updateInventory(inventoryData, {
        onSuccess: (data) => {
          toast.success("Success update inventory !");
          queryClient.invalidateQueries({ queryKey: ["allInventory"] });
          closeModal();
        },
        onError: (err: any) => {
          toast.error(err?.message ?? "An Error occured");
        },
      });
    } else {
      addinventory(inventoryData, {
        onSuccess: (data) => {
          toast.success("Success create inventory !");
          setInventoryData(INVENTORYDEFAULT);
        },
        onError: (err: any) => {
          toast.error(err?.message ?? "An Error occured");
        },
      });
    }
  };
  return (
    <div>
      {!id && <div className="h-3 font-semibold mb-10">Inventory</div>}
      <form className="mt-12 space-y-8 text-xs" onSubmit={onSubmit}>
        <div className="">
          <FloatLabel>
            <InputText
              className="rounded-xl w-full text-xs border border-slate-300 px-4 py-3"
              id="name"
              autoComplete="off"
              value={inventoryData?.name}
              onChange={(e) =>
                setInventoryData({ ...inventoryData, name: e.target.value })
              }
            />
            <label htmlFor="name" className="-mt-[0.35rem]">
              Name
            </label>
          </FloatLabel>
        </div>
        <div className="">
          <FloatLabel>
            <InputTextarea
              className="rounded-xl w-full text-xs border border-slate-300 px-4 py-3"
              id="description"
              autoComplete="off"
              rows={5}
              value={inventoryData?.description}
              onChange={(e) =>
                setInventoryData({
                  ...inventoryData,
                  description: e.target.value,
                })
              }
            />
            <label htmlFor="description" className="-mt-[0.35rem]">
              Description
            </label>
          </FloatLabel>
        </div>
        <div>
          <AutocompleteInventoryCategory
            input={inventoryData}
            setInventoryData={setInventoryData}
          />
        </div>
        <div>
          <AutocompleteLocation
            input={inventoryData}
            setInventoryData={setInventoryData}
          />
        </div>
        <div className="">
          <FloatLabel>
            <InputText
              className="rounded-xl w-full text-xs border border-slate-300 px-4 py-3"
              type="number"
              id="qty"
              autoComplete="off"
              value={inventoryData?.qty?.toString()}
              onChange={(e) =>
                setInventoryData({
                  ...inventoryData,
                  qty: e.target.valueAsNumber,
                })
              }
            />
            <label htmlFor="qty" className="-mt-[0.35rem]">
              Quantity
            </label>
          </FloatLabel>
        </div>
        <div>
          <FloatLabel>
            <Dropdown
              inputId="status"
              value={inventoryData.status ?? 1}
              onChange={(e: DropdownChangeEvent) =>
                setInventoryData({ ...inventoryData, status: e.value })
              }
              options={Status}
              optionLabel="label"
              panelClassName="text-xs"
              className="rounded-xl w-full text-xs border border-slate-300 px-2 py-1"
            />
            <label htmlFor="status">Status</label>
          </FloatLabel>
        </div>
        <div>
          <FloatLabel>
            <Dropdown
              inputId="condition"
              value={inventoryData.condition ?? 1}
              onChange={(e: DropdownChangeEvent) =>
                setInventoryData({ ...inventoryData, condition: e.value })
              }
              options={Condition}
              optionLabel="label"
              panelClassName="text-xs"
              className="rounded-xl w-full !text-xs border border-slate-300 px-2 py-1"
            />
            <label htmlFor="status">Condition</label>
          </FloatLabel>
        </div>
        <div className="">
          <FloatLabel>
            <InputText
              className="rounded-xl w-full text-xs border border-slate-300 px-4 py-3"
              type="number"
              id="borrowed"
              autoComplete="off"
              value={inventoryData?.borrowed?.toString()}
              onChange={(e) =>
                setInventoryData({
                  ...inventoryData,
                  borrowed: e.target.valueAsNumber,
                })
              }
            />
            <label htmlFor="borrowed" className="-mt-[0.35rem]">
              Borrowed
            </label>
          </FloatLabel>
        </div>
        <div className="">
          <FloatLabel>
            <InputText
              className="rounded-xl w-full text-xs border border-slate-300 px-4 py-3"
              type="number"
              id="broken"
              autoComplete="off"
              value={inventoryData?.broken?.toString()}
              onChange={(e) =>
                setInventoryData({
                  ...inventoryData,
                  broken: e.target.valueAsNumber,
                })
              }
            />
            <label htmlFor="broken" className="-mt-[0.35rem]">
              Broken
            </label>
          </FloatLabel>
        </div>
        <div>
          <Button
            type="submit"
            disabled={
              !inventoryData.name ||
              !inventoryData.categoryId ||
              !inventoryData.categoryLookup ||
              loadingUpdate ||
              loadingAdd
            }
            loading={loadingAdd || loadingUpdate}
            className="w-full border border-blue-400 text-blue-400 py-2 rounded-xl disabled:border-slate-300 disabled:text-slate-300 disabled:hover:bg-transparent disabled:hover:text-slate-300 hover:text-white hover:bg-blue-400"
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default InventoryForm;
