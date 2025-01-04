import { LoginInput, LoginOutput } from "@/types/user";
import http from "./base-query";
import { useMutation } from "react-query";

const loginAdmin = async (input: LoginInput) => {
    const result = await http.post<LoginOutput>("/api/user/login", input);

    return result.data;
}

export const useLoginAdmin = () => {
    return useMutation((input: LoginInput) => loginAdmin(input));
}