import { TOKEN } from "@/constants/loginConstant";
import http from "./base-query";
import { useMutation, useQuery } from "react-query";
import { MessageType } from "@/types/common";
import { SettingType } from "@/types/setting";

const getSetting = async () => {
    const result = await http.get<SettingType>(`/api/setting`)

    return result.data;
}

const addUpdateSetting = async (input: SettingType) => {
    const token = localStorage.getItem(TOKEN)?.replaceAll('"', "") ?? "";
    const result = await http.post<MessageType>(`/api/setting`, input, {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    })

    return result.data;
}

export const useGetSetting = () => {
    return useQuery("setting", () => getSetting());
}

export const useAddUpdateSetting = () => {
    return useMutation((input : SettingType) => addUpdateSetting(input));
}
