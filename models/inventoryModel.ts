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
    categoryLookup : {...LookupDefault}
}, {
    timestamps: true
});

const Inventory = mongoose.models.Inventory ?? mongoose.model<IInventoryModel>("Inventory", inventory);
export default Inventory;