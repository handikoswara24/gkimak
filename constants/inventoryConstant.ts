import { ChoiceType } from "@/types/common";
import { InventoryInput } from "@/types/inventory";

export const INVENTORYDEFAULT : InventoryInput = {
    categoryId: null,
    categoryLookup: null,
    description: "",
    name: "",
    qty: 1,
    borrowed: 0,
    broken: 0,
    condition: 1,
    status: 1
}

export const Status : ChoiceType[] = [
    {
        label: "Available",
        value: 1,
    },
    {
        label: "Borrowed",
        value: 2,
    },
    {
        label: "Broken",
        value: 3
    }
]

export const Condition : ChoiceType[] = [
    {
        label: "Good",
        value: 1
    },
    {
        label: "Fair",
        value: 2
    },
    {
        label: "Broken",
        value: 3
    },
]