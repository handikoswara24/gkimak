import { Lookup } from "./common"
import { Pagination } from "./pagination"

export interface IInventoryDocument extends Document {
    name: string,
    description: string,
    categoryId: string,
    categoryLookup : Lookup
    code: string,
    qty: number,
    condition: number,
    status: number,
    borrowed: number,
    broken: number,
    locationLookup: Lookup,
    locationId: string
}

export interface IInventoryModel extends Document {

}

export type InventoryType = {
    _id: string,
    name: string,
    description: string,
    categoryId: string,
    categoryLookup : Lookup
    code: string,
    qty: number,
    condition: number,
    status: number,
    borrowed: number,
    broken: number,
    locationLookup: Lookup,
    locationId: string
}

export type InventoryInput = {
    name: string,
    description: string,
    categoryId: string | null,
    categoryLookup : Lookup | null,
    qty: number,
    condition?: number,
    status?: number,
    borrowed?: number,
    broken?: number,
    locationLookup: Lookup | null,
    locationId: string | null
}

export type ListInventory = {
    inventory: InventoryType[],
    pagination: Pagination
}

export type InventoryByCode = {
    result: InventoryType
}