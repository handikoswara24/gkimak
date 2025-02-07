import { Document } from "mongoose"

export interface ISettingDocument extends Document {
    watchIdLive: string,
    welcomeText: string,
    title: string,
    ayat: string,
    isiAyat: string
}

export interface ISettingModel extends Document {
    
}

export type SettingType = {
    watchIdLive: string,
    welcomeText: string,
    title: string,
    ayat: string,
    isiAyat: string
}