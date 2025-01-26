import { Document } from "mongoose"

export interface ISettingDocument extends Document {
    watchIdLive: string
}

export interface ISettingModel extends Document {

}

export type SettingType = {
    watchIdLive: string
}