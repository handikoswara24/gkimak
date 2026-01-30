import { TOKEN } from "@/constants/loginConstant";
import http from "./base-query";
import { MessageType } from "@/types/common";
import { useQuery, useMutation } from "react-query";
import { BorrowItemInput, ListBorrowItem } from "@/types/borrowItem";

export const getAllBorrowItem = async (
  page: number,
  numberPerPage: number,
  search: string,
  status: number
) => {
  const token = localStorage.getItem(TOKEN)?.replaceAll('"', "") ?? "";
  const result = await http.get<ListBorrowItem>(
    `/api/borrowitem?page=${page}&numberPerPage=${numberPerPage}&search=${search}&status=${status}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return result.data;
};

const addBorrowItem = async (borrowItem: BorrowItemInput) => {
  const token = localStorage.getItem(TOKEN)?.replaceAll('"', "") ?? "";
  const result = await http.post<MessageType>(`/api/borrowitem`, borrowItem, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return result.data;
};

const updateBorrowItem = async (id: string, borrowItem: BorrowItemInput) => {
  const token = localStorage.getItem(TOKEN)?.replaceAll('"', "") ?? "";
  const result = await http.put<MessageType>(
    `/api/borrowitem/${id}`,
    borrowItem,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return result.data;
};

const deleteBorrowItem = async (id: string) => {
  const token = localStorage.getItem(TOKEN)?.replaceAll('"', "") ?? "";
  const result = await http.delete<MessageType>(`/api/borrowitem/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return result.data;
};

export const useGetAllBorrowItems = (
  page: number,
  numberPerPage: number,
  search: string,
  status: number
) => {
  return useQuery(["allBorrowItems", page, numberPerPage, search, status], () =>
    getAllBorrowItem(page, numberPerPage, search, status)
  );
};

export const useAddBorrowItem = () => {
  return useMutation((option: BorrowItemInput) => addBorrowItem(option));
};

export const useUpdateBorrowItem = (id: string) => {
  return useMutation((option: BorrowItemInput) => updateBorrowItem(id, option));
};

export const useDeleteBorrowItem = () => {
  return useMutation((id: string) => deleteBorrowItem(id));
};
