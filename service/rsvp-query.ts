import { RSVP } from "@/types/rsvp";
import http from "./base-query";
import { ResultType } from "@/types/common";
import { useMutation } from "react-query";

const addRSVP = async (rsvp: RSVP) => {
    const result = await http.post<ResultType>(`/api/rsvp`, rsvp);

    return result.data;
}

const useAddRSVP = () => {
    return useMutation((rsvp: RSVP) => addRSVP(rsvp));
}

export {
    useAddRSVP
}