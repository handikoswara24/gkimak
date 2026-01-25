import { Pagination } from "./pagination";

export interface IOptionsDocument extends Document {
  name: string;
  type: string;
  description: string;
}

export interface IOptionsModel extends Document {}

export type OptionsType = {
  _id: string;
  name: string;
  type: string;
  description: string;
};

export type OptionsInput = {
  name: string;
  type: string;
  description: string;
};

export type ListOptions = {
  option: OptionsType[];
  pagination: Pagination;
};
