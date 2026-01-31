import { BorrowItemInput } from "@/types/borrowItem";
import { ChoiceType } from "@/types/common";

export const BorrowStatus: ChoiceType[] = [
  {
    label: "Open",
    value: 1,
  },
  {
    label: "Released",
    value: 2,
  },
  {
    label: "Closed",
    value: 3,
  },
];

export const BorrowItemDefault: BorrowItemInput = {
  memberId: null,
  memberLookup: null,
  borrowDate: new Date(),
  returnDate: null,
  items: [],
  purpose: "",
};
