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
          setBorrowItemData(BorrowItemDefault);
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
      </form>
    </div>
  );
};

export default BorrowItemForm;
