import { RenunganHarianInput } from "@/types/renunganharian";

export const DEFAULTRENUNGANHARIAN : RenunganHarianInput = {
    author: "",
    content: "",
    date: new Date(new Date().setHours(0,0,0,0)),
    image: [],
    title: ""
}