import { ISettingModel } from "@/types/setting";
import mongoose from "mongoose";

const settingSchema = new mongoose.Schema({
    watchIdLive: {
        type: String
    },
    welcomeText: {
        type: String
    },
    title: {
        type: String
    },
    ayat: {
        type: String
    },
    isiAyat: {
        type: String
    },
    tentangGereja: {
        type: String
    },
    tentangGerejaDesc : {
        type: String
    },
    tentangGerejaButton: {
        type: String
    },
    renunganHarianHome : {
        type: String
    },
    renunganHarianHomeDesc :{
        type: String
    },
    live: {
        type: String,
    },
    liveDesc: {
        type: String
    },
    kenangan: {
        type: String
    }
},{
    timestamps: true
})

const Setting = mongoose.models.Setting ?? mongoose.model<ISettingModel>("Setting", settingSchema);
export default Setting;