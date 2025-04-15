import { Document } from "mongoose"

export interface ISettingDocument extends Document {
    watchIdLive: string,
    welcomeText: string,
    title: string,
    ayat: string,
    isiAyat: string,
    tentangGereja: string,
    tentangGerejaDesc : string,
    tentangGerejaButton: string,
    renunganHarianHome : string,
    renunganHarianHomeDesc :string,
    live: string,
    liveDesc: string,
    kenangan: string
}

export interface ISettingModel extends Document {
    
}

export type SettingType = {
    watchIdLive: string,
    welcomeText: string,
    title: string,
    ayat: string,
    isiAyat: string,
    tentangGereja: string,
    tentangGerejaDesc : string,
    tentangGerejaButton: string,
    renunganHarianHome : string,
    renunganHarianHomeDesc :string,
    live: string,
    liveDesc: string,
    kenangan: string
}