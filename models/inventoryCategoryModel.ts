import { LookupDefault } from "@/types/common";
import { IInventoryCategoryModel } from "@/types/inventoryCategory";
import mongoose, { Schema } from "mongoose";

const inventoryCategory = new mongoose.Schema({
    parentId : {
        type : Schema.Types.ObjectId
    },
    name: {
        type: String,
    },
    code: {
        type: String,
    },
    parentLookup : {...LookupDefault}
}, {
    timestamps: true
});

const InventoryCategory = mongoose.models.InventoryCategory ?? mongoose.model<IInventoryCategoryModel>("InventoryCategory", inventoryCategory);
export default InventoryCategory;