import { LookupDefault } from "@/types/common";
import { IInventoryModel } from "@/types/inventory";
import mongoose, { Schema } from "mongoose";

const inventory = new mongoose.Schema({
    categoryId : {
        type : Schema.Types.ObjectId
    },
    name: {
        type: String,
    },
    code: {
        type: String,
    },
    description: {
        type: String,
    },
    categoryLookup : {...LookupDefault},
    qty: {
        type: Number
    },
    condition: {
        type: Number,
        default: 1
    },
    status: {
        type: Number,
        default: 1
    },
    broken: {
        type: Number,
        default: 0
    },
    borrowed: {
        type: Number,
        default: 0
    },
    locations: {
        type: Number,
        default: 1
    }
}, {
    timestamps: true
});

const Inventory = mongoose.models.Inventory ?? mongoose.model<IInventoryModel>("Inventory", inventory);
export default Inventory;