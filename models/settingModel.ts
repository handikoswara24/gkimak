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
    },
    aboutTitle: {
        type: String
    },
    aboutDesc: {
        type: String
    },
    aboutTitle2: {
        type: String
    },
    aboutDesc2: {
        type: String
    },
    aboutBannerTitle : {
        type: String
    },
    aboutMissionTitle: {
        type: String
    },
    aboutMissionDesc: {
        type: String
    },
    aboutVisionTitle: {
        type: String
    },
    aboutVisionDesc: {
        type: String
    },
    aboutStatementFaith:{
        type: String
    },
    aboutStatementFaithDesc: {
        type: String
    },
    leaderTitle: {
        type: String
    },
    leaderDesc: {
        type: String
    },
    faqTitle: {
        type: String
    },
    hubTitle: {
        type: String
    },
    waTitle: {
        type: String
    },
    waNumber: {
        type: String
    },
    addressTitle: {
        type: String
    },
    address: {
        type: String
    },
    mapsButtonLabel: {
        type: String
    }
},{
    timestamps: true
})

const Setting = mongoose.models.Setting ?? mongoose.model<ISettingModel>("Setting", settingSchema);
export default Setting;