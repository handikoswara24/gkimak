"use client";

import { BorrowItemInput } from "@/types/borrowItem";
import React, { useState } from "react";
import { useQueryClient } from "react-query";
import { useModalAction } from "../utils/ModalProvider";
import {
  useAddBorrowItem,
  useUpdateBorrowItem,
} from "@/service/borrow-item-query";
import { toast } from "react-toastify";
import { BorrowItemDefault } from "@/constants/borrowItemConstant";
import AutocompleteMember from "./AutocompleteMember";
import AutocompleteItem from "./AutocompleteItem";
import { FloatLabel } from "primereact/floatlabel";
import { Calendar } from "primereact/calendar";
import dayjs from "dayjs";
import { InputText } from "primereact/inputtext";
import Button from "../UI/Button";

type BorrowItemFormProps = {
  id?: string;
  input: BorrowItemInput;
};

const BorrowItemForm = ({ id, input }: BorrowItemFormProps) => {
  const queryClient = useQueryClient();
  const { closeModal } = useModalAction();
  const [borrowItemData, setBorrowItemData] = useState<BorrowItemInput>(input);
  const { mutate: addBorrowItem, isLoading: loadingAdd } = useAddBorrowItem();
  const { mutate: updateBorrowItem, isLoading: loadingUpdate } =
    useUpdateBorrowItem(id ?? "");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !borrowItemData.memberId ||
      !borrowItemData.memberLookup ||
      !borrowItemData.purpose ||
      !borrowItemData.borrowDate ||
      borrowItemData.items.length == 0 ||
      !borrowItemData.returnDate
    ) {
      toast.error("Please Fill All Fields");
      return;
    }

    if (id) {
      updateBorrowItem(borrowItemData, {
        onSuccess: (data) => {
          toast.success("Success update borrow item!");
          queryClient.invalidateQueries({ queryKey: ["allBorrowItems"] });
          closeModal();
        },
        onError: (err: any) => {
          toast.error(err?.message ?? "An Error occured");
        },
      });
    } else {
      addBorrowItem(borrowItemData, {
        onSuccess: (data) => {
          toast.success("Success create borrow item!");
          setBorrowItemData(structuredClone(BorrowItemDefault));
        },
        onError: (err: any) => {
          toast.error(err?.message ?? "An Error occured");
        },
      });
    }
  };
  return (
    <div>
      {!id && <div className="h-3 font-semibold mb-10">Borrow Item</div>}
      <form className="mt-12 space-y-8 text-xs" onSubmit={onSubmit}>
        <div>
          <AutocompleteMember
            input={borrowItemData}
            setBorrowItemData={setBorrowItemData}
          />
        </div>
        <div>
          <AutocompleteItem
            input={borrowItemData}
            setBorrowItemData={setBorrowItemData}
          />
        </div>
        <div className="flex gap-4 md:flex-row flex-col">
          <div className="grow">
            <FloatLabel>
              <Calendar
                className="rounded-xl w-full text-xs border border-slate-300 px-4 py-3"
                id="date"
                value={new Date(input.borrowDate)}
                onChange={(e) =>
                  setBorrowItemData({
                    ...input,
                    borrowDate: e.value ?? new Date(),
                  })
                }
              ></Calendar>
              <label htmlFor="date" className="-mt-[0.35rem]">
                Borrow Date
              </label>
            </FloatLabel>
          </div>
          <div className="grow">
            <FloatLabel>
              <Calendar
                className="rounded-xl w-full text-xs border border-slate-300 px-4 py-3"
                id="date"
                value={
                  input.returnDate
                    ? new Date(input.returnDate)
                    : dayjs(new Date()).add(1, "day").toDate()
                }
                onChange={(e) =>
                  setBorrowItemData({
                    ...input,
                    returnDate: e.value ?? new Date(),
                  })
                }
              ></Calendar>
              <label htmlFor="date" className="-mt-[0.35rem]">
                Return Date
              </label>
            </FloatLabel>
          </div>
        </div>
        <div className="">
          <FloatLabel>
            <InputText
              className="rounded-xl w-full text-xs border border-slate-300 px-4 py-3"
              id="purpose"
              autoComplete="off"
              value={borrowItemData.purpose}
              onChange={(e) =>
                setBorrowItemData({
                  ...borrowItemData,
                  purpose: e.target.value,
                })
              }
            />
            <label htmlFor="purpose" className="-mt-[0.35rem]">
              Purpose
            </label>
          </FloatLabel>
        </div>
        <div>
          <Button
            type="submit"
            disabled={
              !borrowItemData.memberId ||
              !borrowItemData.memberLookup ||
              !borrowItemData.purpose ||
              !borrowItemData.borrowDate ||
              borrowItemData.items.length == 0 ||
              !borrowItemData.returnDate ||
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

export default BorrowItemForm;
