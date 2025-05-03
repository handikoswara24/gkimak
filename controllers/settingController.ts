import catchAsyncErrors from "@/middlewares/catchAsyncErrors";
import { NextRequest, NextResponse } from "next/server";
import { ISettingDocument, SettingType } from "@/types/setting";
import Setting from "@/models/settingModel";
import { DEFAULTSETTING } from "@/constants/settingConstant";

const addUpdateSetting = catchAsyncErrors(async (req: NextRequest) => {
    const body = await req.json() as SettingType;

    const setting: ISettingDocument | null = await Setting.findOne({});

    if (setting) {
        setting.watchIdLive = body.watchIdLive || setting.watchIdLive;
        setting.welcomeText = body.welcomeText || setting.welcomeText;
        setting.title = body.title || setting.title;
        setting.ayat = body.ayat || setting.ayat;
        setting.isiAyat = body.isiAyat || setting.isiAyat;
        setting.tentangGereja = body.tentangGereja || setting.tentangGereja;
        setting.tentangGerejaDesc = body.tentangGerejaDesc || setting.tentangGerejaDesc;
        setting.tentangGerejaButton = body.tentangGerejaButton || setting.tentangGerejaButton;
        setting.renunganHarianHome = body.renunganHarianHome || setting.renunganHarianHome;
        setting.renunganHarianHomeDesc = body.renunganHarianHomeDesc || setting.renunganHarianHomeDesc;
        setting.live = body.live || setting.live;
        setting.liveDesc = body.liveDesc || setting.liveDesc;
        setting.kenangan = body.kenangan || setting.kenangan;
        setting.aboutBannerTitle = body.aboutBannerTitle || setting.aboutBannerTitle;
        setting.aboutDesc = body.aboutDesc || setting.aboutDesc;
        setting.aboutDesc2 = body.aboutDesc2 || setting.aboutDesc2;
        setting.aboutMissionDesc = body.aboutMissionDesc || setting.aboutMissionDesc;
        setting.aboutMissionTitle = body.aboutMissionTitle || body.aboutMissionTitle;
        setting.aboutStatementFaith = body.aboutStatementFaith || setting.aboutStatementFaith;
        setting.aboutStatementFaithDesc = body.aboutStatementFaithDesc || setting.aboutStatementFaithDesc;
        setting.aboutTitle = body.aboutTitle || setting.aboutTitle;
        setting.aboutTitle2 = body.aboutTitle2 || setting.aboutTitle2;
        setting.aboutVisionDesc = body.aboutVisionDesc || setting.aboutVisionDesc;
        setting.aboutVisionTitle = body.aboutVisionTitle || setting.aboutVisionTitle;
        setting.address = body.address || setting.address;
        setting.addressTitle = body.addressTitle || setting.addressTitle;
        setting.faqTitle = body.faqTitle || setting.faqTitle;
        setting.hubTitle = body.hubTitle || setting.hubTitle;
        setting.leaderDesc = body.leaderDesc || setting.leaderDesc;
        setting.leaderTitle = body.leaderTitle || setting.leaderTitle;
        setting.waNumber = body.waNumber || setting.waNumber;
        setting.waTitle = body.waTitle || body.waTitle;
        setting.mapsButtonLabel = body.mapsButtonLabel || body.mapsButtonLabel;
        await setting.save();
    }
    else {
        await Setting.create({
            watchIdLive: body.watchIdLive
        })
    }
    return NextResponse.json({
        message: "Success"
    });
});

const getSetting = catchAsyncErrors(async (req: NextRequest) => {
    const setting: ISettingDocument | null = await Setting.findOne({});

    if (setting == null) {
        return NextResponse.json({
            ...DEFAULTSETTING
        })
    }

    return NextResponse.json<SettingType>({
        ayat: setting.ayat ?? DEFAULTSETTING.ayat,
        isiAyat: setting.isiAyat ?? DEFAULTSETTING.isiAyat,
        title: setting.title ?? DEFAULTSETTING.title,
        watchIdLive: setting.watchIdLive ?? DEFAULTSETTING.watchIdLive,
        welcomeText: setting.welcomeText ?? DEFAULTSETTING.welcomeText,
        kenangan: setting.kenangan ?? DEFAULTSETTING.kenangan,
        live: setting.live ?? DEFAULTSETTING.live,
        liveDesc: setting.liveDesc ?? DEFAULTSETTING.liveDesc,
        renunganHarianHome: setting.renunganHarianHome ?? DEFAULTSETTING.renunganHarianHome,
        renunganHarianHomeDesc: setting.renunganHarianHomeDesc ?? DEFAULTSETTING.renunganHarianHomeDesc,
        tentangGereja: setting.tentangGereja ?? DEFAULTSETTING.tentangGereja,
        tentangGerejaButton: setting.tentangGerejaButton ?? DEFAULTSETTING.tentangGerejaButton,
        tentangGerejaDesc: setting.tentangGerejaDesc ?? DEFAULTSETTING.tentangGerejaDesc,
        aboutBannerTitle: setting.aboutBannerTitle ?? DEFAULTSETTING.aboutBannerTitle,
        aboutDesc: setting.aboutDesc ?? DEFAULTSETTING.aboutDesc,
        aboutDesc2: setting.aboutDesc2 ?? DEFAULTSETTING.aboutDesc2,
        aboutMissionDesc: setting.aboutMissionDesc ?? DEFAULTSETTING.aboutMissionDesc,
        aboutMissionTitle: setting.aboutMissionTitle ?? DEFAULTSETTING.aboutMissionTitle,
        aboutStatementFaith: setting.aboutStatementFaith ?? DEFAULTSETTING.aboutStatementFaith,
        aboutStatementFaithDesc : setting.aboutStatementFaithDesc ?? DEFAULTSETTING.aboutStatementFaithDesc,
        aboutTitle: setting.aboutTitle ?? DEFAULTSETTING.aboutTitle,
        aboutTitle2 : setting.aboutTitle2 ?? DEFAULTSETTING.aboutTitle2,
        aboutVisionDesc: setting.aboutVisionDesc ?? DEFAULTSETTING.aboutVisionDesc,
        aboutVisionTitle: setting.aboutVisionTitle ?? DEFAULTSETTING.aboutVisionTitle,
        address: setting.address ?? DEFAULTSETTING.address,
        addressTitle: setting.addressTitle ?? DEFAULTSETTING.addressTitle,
        faqTitle: setting.faqTitle ?? DEFAULTSETTING.faqTitle,
        hubTitle: setting.hubTitle ?? DEFAULTSETTING.hubTitle,
        leaderDesc: setting.leaderDesc ?? DEFAULTSETTING.leaderDesc,
        leaderTitle : setting.leaderTitle ?? DEFAULTSETTING.leaderTitle,
        mapsButtonLabel: setting.mapsButtonLabel ?? DEFAULTSETTING.mapsButtonLabel,
        waNumber: setting.waNumber ?? DEFAULTSETTING.waNumber,
        waTitle: setting.waTitle ?? DEFAULTSETTING.waTitle
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