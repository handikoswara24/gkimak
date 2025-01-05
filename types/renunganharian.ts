export type RenunganHarianType = {
    _id: string,
    content: string,
    date: Date,
    author: string,
    title: string,
    images: ImageRenungan[],
}

export type RenunganHarianInput = {
    content: string,
    date: Date,
    author: string,
    title: string,
    images: string[],
}

export type ImageRenungan = {
    url: string,
    sort: number
}