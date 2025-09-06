import { Pagination } from "./pagination"

export interface IOptionsDocument extends Document {
    name: string,
    type: number,
    description: string
}

export interface IOptionsModel extends Document {

}

export type OptionsType = {
    _id: string,
    name: string,
    type: number,
    description: string
}

export type OptionsInput = {
    name: string,
    type: number,
    description: string
}

export type ListOptions = {
    location: OptionsType[],
    pagination: Pagination
}