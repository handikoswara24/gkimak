import { RenunganHarianInput } from "@/types/renunganharian";

export const DEFAULTRENUNGANHARIAN : RenunganHarianInput = {
    author: "",
    content: "",
    date: new Date(new Date().setHours(0,0,0,0)),
    image: [],
    title: "",
    verse: "",
    refleksi: "",
    ayatBgColor: "#000000",
    ayatColor: "#ffffff",
    refleksiBgColor: "#000000",
    refleksiColor: "#ffffff",
    renunganBgColor: "#000000",
    renunganColor: "#ffffff",
    isiAyat: ""
}