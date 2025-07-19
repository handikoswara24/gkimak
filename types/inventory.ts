import { Lookup } from "./common"
import { Pagination } from "./pagination"

export interface IInventoryDocument extends Document {
    name: string,
    description: string,
    categoryId: string,
    categoryLookup : Lookup
    code: string
}

export interface IInventoryModel extends Document {

}

export type InventoryType = {
    _id: string,
    name: string,
    description: string,
    categoryId: string,
    categoryLookup : Lookup
    code: string
}

export type InventoryInput = {
    name: string,
    description: string,
    categoryId: string | null,
    categoryLookup : Lookup | null
}

export type ListInventory = {
    inventory: InventoryType[],
    pagination: Pagination
}