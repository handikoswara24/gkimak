import catchAsyncErrors from "@/middlewares/catchAsyncErrors";
import { NextRequest, NextResponse } from "next/server";
import { ISettingDocument, SettingType } from "@/types/setting";
import Setting from "@/models/settingModel";
import { DEFAULTSETTING } from "@/constants/settingConstant";

const addUpdateSetting = catchAsyncErrors(async (req: NextRequest) => {
    const body = await req.json() as SettingType;

    const setting : ISettingDocument | null = await Setting.findOne({});

    if(setting){
        setting.watchIdLive = body.watchIdLive || setting.watchIdLive;

        await setting.save();
    }
    else{
        await Setting.create({
            watchIdLive : body.watchIdLive
        })
    }
    return NextResponse.json({
        message: "Success"
    });
});

const getSetting = catchAsyncErrors(async (req: NextRequest) => {
    const setting : ISettingDocument | null = await Setting.findOne({});

    if(setting == null) {
        return NextResponse.json({
            ...DEFAULTSETTING
        })
    }

    return NextResponse.json({
        watchIdLive: setting.watchIdLive
    });
});

const template = catchAsyncErrors(async (req: NextRequest) => {
    return NextResponse.json({

    });
});

export {
    addUpdateSetting,
    getSetting
}