import { Pagination } from "./pagination"

export type RenunganHarianType = {
    _id: string,
    content: string,
    date: Date,
    author: string,
    title: string,
    verse: string,
    image: ImageRenungan[],
    slug: string,
    refleksi: string,
    ayatColor: string,
    ayatBgColor: string,
    renunganColor: string,
    renunganBgColor: string,
    refleksiColor: string,
    refleksiBgColor: string,
    isiAyat: string
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
    verse: string,
    image: string[],
    refleksi: string,
    ayatColor: string,
    ayatBgColor: string,
    renunganColor: string,
    renunganBgColor: string,
    refleksiColor: string,
    refleksiBgColor: string,
    isiAyat: string
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
    verse: string,
    image: ImageRenungan[],
    slug: string,
    refleksi: string,
    ayatColor: string,
    ayatBgColor: string,
    renunganColor: string,
    renunganBgColor: string,
    refleksiColor: string,
    refleksiBgColor: string,
    isiAyat: string
}

export interface IRenunganHarian extends Document {

}