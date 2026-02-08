import { TOKEN } from "@/constants/loginConstant";
import http from "./base-query";
import { useMutation, useQuery } from "react-query";
import { MessageType } from "@/types/common";
import {
  GetJemaatInput,
  JemaatById,
  JemaatInput,
  JemaatType,
  ListJemmat,
} from "@/types/jemaat";

export const getAllJemaat = async (
  page: number,
  numberPerPage: number,
  search: string
) => {
  const token = localStorage.getItem(TOKEN)?.replaceAll('"', "") ?? "";
  const result = await http.get<ListJemmat>(
    `/api/jemaat?page=${page}&numberPerPage=${numberPerPage}&search=${search}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return result.data;
};

const getJemaatByPhone = async (input: GetJemaatInput) => {
  const token = localStorage.getItem(TOKEN)?.replaceAll('"', "") ?? "";
  const result = await http.post<JemaatType>(`/api/jemaat/byphone`, input, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return result.data;
};

export const getJemaatById = async (id: string) => {
  const token = localStorage.getItem(TOKEN)?.replaceAll('"', "") ?? "";
  const result = await http.get<JemaatById>(`/api/jemaat/byid?id=${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return result.data;
};

const addJemaat = async (jemaat: JemaatInput) => {
  const token = localStorage.getItem(TOKEN)?.replaceAll('"', "") ?? "";
  const result = await http.post<MessageType>(`/api/jemaat`, jemaat, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return result.data;
};

const updateJemaat = async (id: string, jemaat: JemaatInput) => {
  const token = localStorage.getItem(TOKEN)?.replaceAll('"', "") ?? "";

  const result = await http.put<MessageType>(`/api/jemaat/${id}`, jemaat, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return result.data;
};

const deleteJemaat = async (id: string) => {
  const token = localStorage.getItem(TOKEN)?.replaceAll('"', "") ?? "";

  const result = await http.delete<MessageType>(`/api/jemaat/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return result.data;
};

export const useGetAllJemaat = (
  page: number,
  numberPerPage: number,
  search: string
) => {
  return useQuery(["allJemaat", page, numberPerPage, search], () =>
    getAllJemaat(page, numberPerPage, search)
  );
};

export const useJemaatByPhoneMutation = () => {
  return useMutation((jemaat: GetJemaatInput) => getJemaatByPhone(jemaat));
};

export const useAddJemaatMutation = () => {
  return useMutation((jemaat: JemaatInput) => addJemaat(jemaat));
};

export const useUpdateJemaatMutation = (id: string) => {
  return useMutation((jemaat: JemaatInput) => updateJemaat(id, jemaat));
};

export const useDeleteJemaatMutation = () => {
  return useMutation((id: string) => deleteJemaat(id));
};
