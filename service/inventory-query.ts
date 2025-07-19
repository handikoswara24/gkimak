import { TOKEN } from "@/constants/loginConstant";
import http from "./base-query";
import { useMutation, useQuery } from "react-query";
import { MessageType } from "@/types/common";
import { InventoryInput, ListInventory } from "@/types/inventory";


export const getAllInventory = async (page : number, numberPerPage : number, search: string) => {
    const token = localStorage.getItem(TOKEN)?.replaceAll('"', "") ?? "";
    const result = await http.get<ListInventory>(`/api/inventory?page=${page}&numberPerPage=${numberPerPage}&search=${search}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    })

    return result.data;
}

const addInventory = async (inventory : InventoryInput) => {
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


export const useGetAllInventory = (page : number, numberPerPage : number, search: string) => {
    return useQuery(["allInventory", page, numberPerPage, search], () => getAllInventory(page, numberPerPage, search))
}


export const useAddInventoryMutation = () => {
    return useMutation((inventory: InventoryInput) => addInventory(inventory));
}

export const useUpdateInventoryMutation = (id: string) => {
    return useMutation((inventory: InventoryInput) => updateInventory(id, inventory));
}

export const useDeleteInventoryMutation = () => {
    return useMutation((id : string) => deleteInventory(id));
}
