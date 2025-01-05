import { TOKEN } from "@/constants/loginConstant";
import http from "./base-query";
import { ListUser, UserCreateResponse, UserInput } from "@/types/user";
import { useMutation, useQuery } from "react-query";
import { MessageType } from "@/types/common";

const getAllUser = async (page : number, numberPerPage : number) => {
    const token = localStorage.getItem(TOKEN)?.replaceAll('"', "") ?? "";
    const result = await http.get<ListUser>(`/api/user?page=${page}&numberPerPage=${numberPerPage}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    })

    return result.data;
}

const addUser = async (user : UserInput) => {
    const token = localStorage.getItem(TOKEN)?.replaceAll('"', "") ?? "";
    const result = await http.post<UserCreateResponse>(`/api/user`, user, {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    })

    return result.data;
}

const updateUser = async (id: string, user: UserInput) => {
    const token = localStorage.getItem(TOKEN)?.replaceAll('"', "") ?? "";

    const result = await http.put<UserCreateResponse>(`/api/user/${id}`, user, {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    })

    return result.data;
}

const deleteUser = async (id: string) => {
    const token = localStorage.getItem(TOKEN)?.replaceAll('"', "") ?? "";

    const result = await http.delete<MessageType>(`/api/users/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    })

    return result.data;
}

const resetPassword = async (id : string) => {
    const token = localStorage.getItem(TOKEN)?.replaceAll('"', "") ?? "";

    const result = await http.post<MessageType>(`/api/user/resetpassword`, {
        id
    }, {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    });

    return result.data;
}

export const useGetAllUser = (page : number, numberPerPage : number) => {
    return useQuery(["alluser", page, numberPerPage], () => getAllUser(page, numberPerPage))
}

export const useAddUserMutation = () => {
    return useMutation((user : UserInput) => addUser(user));
}

export const useUpdateUserMutation = (id: string) => {
    return useMutation((user : UserInput) => updateUser(id, user));
}

export const useDeleteUserMutation = () => {
    return useMutation((id : string) => deleteUser(id));
}

export const useResetPasswordMutation = () => {
    return useMutation((id : string) => resetPassword(id))
}