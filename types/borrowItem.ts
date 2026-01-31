import { Lookup } from "./common";
import { Pagination } from "./pagination";

export interface IBorrowItem extends Document {
  memberId: string;
  memberLookup: Lookup;
  borrowDate: Date;
  returnDate: Date;
  items: ItemForBorrow[];
  purpose: string;
  status: number;
  borrowNumber: string;
}

export interface IBorrowItemModel extends Document {}

export type ItemForBorrow = {
  itemId: string;
  itemLookup: Lookup;
  quantity: number;
};

export type BorrowItemType = {
  _id: string;
  memberId: string;
  memberLookup: Lookup;
  borrowDate: Date;
  returnDate: Date;
  items: ItemForBorrow[];
  purpose: string;
  status: number;
  borrowNumber: string;
};

export type BorrowItemInput = {
  memberId: string | null;
  memberLookup: Lookup | null;
  borrowDate: Date;
  returnDate: Date | null;
  items: ItemForBorrow[];
  purpose: string;
  status?: number;
};

export type ListBorrowItem = {
  borrowItem: BorrowItemType[];
  pagination: Pagination;
};
