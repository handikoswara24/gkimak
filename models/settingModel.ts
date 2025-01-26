import { ISettingModel } from "@/types/setting";
import mongoose from "mongoose";

const settingSchema = new mongoose.Schema({
    watchIdLive: {
        type: String
    },
},{
    timestamps: true
})

const Setting = mongoose.models.Setting ?? mongoose.model<ISettingModel>("Setting", settingSchema);
export default Setting;