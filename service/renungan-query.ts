import { TOKEN } from "@/constants/loginConstant";
import http from "./base-query";
import { useMutation, useQuery } from "react-query";
import { MessageType } from "@/types/common";
import { ListRenungan, RenunganHarianInput } from "@/types/renunganharian";

const getAllRenungan = async (page : number, numberPerPage : number) => {
    const result = await http.get<ListRenungan>(`/api/renungan?page=${page}&numberPerPage=${numberPerPage}`)

    return result.data;
}

const getAllRenunganAdmin = async (page : number, numberPerPage : number) => {
    const token = localStorage.getItem(TOKEN)?.replaceAll('"', "") ?? "";
    const result = await http.get<ListRenungan>(`/api/renungan/admin?page=${page}&numberPerPage=${numberPerPage}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    })

    return result.data;
}

const addRenungan = async (renungan : RenunganHarianInput) => {
    const token = localStorage.getItem(TOKEN)?.replaceAll('"', "") ?? "";
    const result = await http.post<MessageType>(`/api/renungan`, renungan, {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    })

    return result.data;
}

const updateRenungan = async (id: string, renungan: RenunganHarianInput) => {
    const token = localStorage.getItem(TOKEN)?.replaceAll('"', "") ?? "";

    const result = await http.put<MessageType>(`/api/renungan/${id}`, renungan, {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    })

    return result.data;
}

const deleteRenungan = async (id: string) => {
    const token = localStorage.getItem(TOKEN)?.replaceAll('"', "") ?? "";

    const result = await http.delete<MessageType>(`/api/renungan/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    })

    return result.data;
}


export const useGetAllRenungan = (page : number, numberPerPage : number) => {
    return useQuery(["allRenungan", page, numberPerPage], () => getAllRenungan(page, numberPerPage))
}

export const useGetAllRenunganAdmin = (page : number, numberPerPage : number) => {
    return useQuery(["allRenunganAdmin", page, numberPerPage], () => getAllRenunganAdmin(page, numberPerPage))
}

export const useAddRenunganMutation = () => {
    return useMutation((renungan : RenunganHarianInput) => addRenungan(renungan));
}

export const useUpdateRenunganMutation = (id: string) => {
    return useMutation((renungan : RenunganHarianInput) => updateRenungan(id, renungan));
}

export const useDeleteRenunganMutation = () => {
    return useMutation((id : string) => deleteRenungan(id));
}
