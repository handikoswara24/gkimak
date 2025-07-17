import { Lookup } from "./common"
import { Pagination } from "./pagination"

export interface IInventoryCategoryDocument extends Document {
    name: string,
    parentId: string,
    parentLookup: Lookup,
    code: string
}

export interface IInventoryCategoryModel extends Document {

}

export type InventoryCategoryType = {
    _id: string,
    name: string,
    parentId: string,
    parentLookup: Lookup,
    code: string
}

export type InventoryCategoryInput = {
    name: string,
    parentId: string | null,
    parentLookup: Lookup | null,
    code: string
}

export type ListInventoryCategory = {
    inventoryCategory: InventoryCategoryType[],
    pagination: Pagination
}