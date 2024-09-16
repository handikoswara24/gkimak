import { RSVP } from "@/type/rsvp";
import http from "./base-query";
import { ResultType } from "@/type/common";
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