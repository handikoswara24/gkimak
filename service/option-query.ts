import { TOKEN } from "@/constants/loginConstant";
import http from "./base-query";
import { ListOptions, OptionsInput } from "@/types/options";
import { MessageType } from "@/types/common";
import { useQuery, useMutation } from "react-query";

export const getAllOptions = async (
  page: number,
  numberPerPage: number,
  search: string,
  type: string
) => {
  const token = localStorage.getItem(TOKEN)?.replaceAll('"', "") ?? "";
  const result = await http.get<ListOptions>(
    `/api/option?page=${page}&numberPerPage=${numberPerPage}&search=${search}&type=${type}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return result.data;
};

const addOption = async (option: OptionsInput) => {
  const token = localStorage.getItem(TOKEN)?.replaceAll('"', "") ?? "";
  const result = await http.post<MessageType>(`/api/option`, option, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return result.data;
};

const updateOption = async (id: string, option: OptionsInput) => {
  const token = localStorage.getItem(TOKEN)?.replaceAll('"', "") ?? "";
  const result = await http.put<MessageType>(`/api/option/${id}`, option, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return result.data;
};

const deleteOption = async (id: string) => {
  const token = localStorage.getItem(TOKEN)?.replaceAll('"', "") ?? "";
  const result = await http.delete<MessageType>(`/api/option/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return result.data;
};

export const useGetAllOptions = (
  page: number,
  numberPerPage: number,
  search: string,
  type: string
) => {
  return useQuery(["allOptions", page, numberPerPage, search, type], () =>
    getAllOptions(page, numberPerPage, search, type)
  );
};

export const useAddOption = () => {
  return useMutation((option: OptionsInput) => addOption(option));
};

export const useUpdateOption = (id: string) => {
  return useMutation((option: OptionsInput) => updateOption(id, option));
};

export const useDeleteOption = () => {
  return useMutation((id: string) => deleteOption(id));
};
