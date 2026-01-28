import { TOKEN } from "@/constants/loginConstant";
import http from "./base-query";
import { useMutation, useQuery } from "react-query";
import { MessageType } from "@/types/common";
import { InventoryByCode, InventoryInput, ListInventory } from "@/types/inventory";


export const getAllInventory = async (page: number, numberPerPage: number, search: string, location: string) => {
    const token = localStorage.getItem(TOKEN)?.replaceAll('"', "") ?? "";
    const result = await http.get<ListInventory>(`/api/inventory?page=${page}&numberPerPage=${numberPerPage}&search=${search}&location=${location}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    })

    return result.data;
}

const addInventory = async (inventory: InventoryInput) => {
    const token = localStorage.getItem(TOKEN)?.replaceAll('"', "") ?? "";
    const result = await http.post<MessageType>(`/api/inventory`, inventory, {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    })

    return result.data;
}

const updateInventory = async (id: string, inventory: InventoryInput) => {
    const token = localStorage.getItem(TOKEN)?.replaceAll('"', "") ?? "";

    const result = await http.put<MessageType>(`/api/inventory/${id}`, inventory, {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    })

    return result.data;
}

const deleteInventory = async (id: string) => {
    const token = localStorage.getItem(TOKEN)?.replaceAll('"', "") ?? "";

    const result = await http.delete<MessageType>(`/api/inventory/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    })

    return result.data;
}

const getInventoryByCode = async (code: string) => {
    const token = localStorage.getItem(TOKEN)?.replaceAll('"', "") ?? "";

    const result = await http.get<InventoryByCode>(`/api/inventory/code?code=${code}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    })

    return result.data;
}

export const useGetInventoryByCode = (code: string) => {
    return useQuery(["inventoryByCode", code], () => getInventoryByCode(code), { enabled: !!code })
}

export const useGetAllInventory = (page: number, numberPerPage: number, search: string, location: string) => {
    return useQuery(["allInventory", page, numberPerPage, search, location], () => getAllInventory(page, numberPerPage, search, location))
}


export const useAddInventoryMutation = () => {
    return useMutation((inventory: InventoryInput) => addInventory(inventory));
}

export const useUpdateInventoryMutation = (id: string) => {
    return useMutation((inventory: InventoryInput) => updateInventory(id, inventory));
}

export const useDeleteInventoryMutation = () => {
    return useMutation((id: string) => deleteInventory(id));
}
