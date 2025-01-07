import { Pagination } from "./pagination"

export type RenunganHarianType = {
    _id: string,
    content: string,
    date: Date,
    author: string,
    title: string,
    image: ImageRenungan[],
}

export type ListRenungan = {
    renungan: RenunganHarianType[],
    pagination: Pagination
}

export type RenunganHarianInput = {
    content: string,
    date: Date,
    author: string,
    title: string,
    image: string[],
}

export type ImageRenungan = {
    url: string,
    sort: number
}

export interface IRenunganHarianDocument extends Document {
    content: string,
    date: Date,
    author: string,
    title: string,
    image: ImageRenungan[]
}

export interface IRenunganHarian extends Document {

}