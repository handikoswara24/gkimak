import { TOKEN } from "@/constants/loginConstant";
import http from "./base-query";
import { useMutation, useQuery } from "react-query";
import { MessageType } from "@/types/common";
import { InventoryCategoryInput, ListInventoryCategory } from "@/types/inventoryCategory";

export const getAllInventoryCategory = async (page : number, numberPerPage : number, search: string) => {
    const token = localStorage.getItem(TOKEN)?.replaceAll('"', "") ?? "";
    const result = await http.get<ListInventoryCategory>(`/api/inventorycategory?page=${page}&numberPerPage=${numberPerPage}&search=${search}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    })

    return result.data;
}

const addInventoryCategory = async (inventoryCategory : InventoryCategoryInput) => {
    const token = localStorage.getItem(TOKEN)?.replaceAll('"', "") ?? "";
    const result = await http.post<MessageType>(`/api/inventorycategory`, inventoryCategory, {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    })

    return result.data;
}

const updateInventoryCategory = async (id: string, inventoryCategory: InventoryCategoryInput) => {
    const token = localStorage.getItem(TOKEN)?.replaceAll('"', "") ?? "";

    const result = await http.put<MessageType>(`/api/inventorycategory/${id}`, inventoryCategory, {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    })

    return result.data;
}

const deleteInventoryCategory = async (id: string) => {
    const token = localStorage.getItem(TOKEN)?.replaceAll('"', "") ?? "";

    const result = await http.delete<MessageType>(`/api/inventorycategory/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    })

    return result.data;
}


export const useGetAllInventoryCategory = (page : number, numberPerPage : number, search: string) => {
    return useQuery(["allInventoryCategory", page, numberPerPage, search], () => getAllInventoryCategory(page, numberPerPage, search))
}


export const useAddInventoryCategoryMutation = () => {
    return useMutation((inventoryCategory: InventoryCategoryInput) => addInventoryCategory(inventoryCategory));
}

export const useUpdateInventoryCategoryMutation = (id: string) => {
    return useMutation((inventoryCategory: InventoryCategoryInput) => updateInventoryCategory(id, inventoryCategory));
}

export const useDeleteInventoryCategoryMutation = () => {
    return useMutation((id : string) => deleteInventoryCategory(id));
}
