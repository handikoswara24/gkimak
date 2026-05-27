"use client"

import { useEffect, useState } from "react";
import Link from "next/link";
import ClickOutside from "./ClickOutside";
import { useAtom } from "jotai";
import { useRouter } from "next/navigation";
import { accessTokenAtom, userDataAtom } from "@/store/loginAtom";
import { TOKEN, USER_DATA } from "@/constants/loginConstant";
import { ChevronDown, LogOut, User } from "lucide-react";

const DropdownUser = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [token, setToken] = useAtom(accessTokenAtom);
    const [userData, setUserData] = useAtom(userDataAtom);
    const router = useRouter();

    const logout = () => {
        setToken("");
        setUserData(null);
        router.push("/")
    }

    useEffect(() => {
        const tokenLocal = localStorage.getItem(TOKEN);
        const userDataLocal = localStorage.getItem(USER_DATA);
        if (!userDataLocal || userDataLocal == "" || userDataLocal == "null" || !tokenLocal || tokenLocal == "") {
            router.push("/");
        }
    }, [])

    // Inisial nama user untuk avatar
    const initials = userData?.username
        ? userData.username.slice(0, 2).toUpperCase()
        : "AD";

    return (
        <ClickOutside onClick={() => setDropdownOpen(false)} className="relative">
            <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center gap-2.5 rounded-lg px-3 py-2 hover:bg-gray transition-colors duration-200"
            >
                {/* Avatar */}
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-semibold text-sm border border-primary/20">
                    {initials}
                </div>

                <div className="hidden sm:block text-left">
                    <span className="block text-sm font-semibold text-black leading-tight">
                        {userData?.username ?? "Admin"}
                    </span>
                    <span className="block text-xs text-body capitalize">
                        {userData?.role ?? "admin"}
                    </span>
                </div>

                <ChevronDown
                    size={14}
                    className={`text-body transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}
                />
            </button>

            {/* Dropdown */}
            {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-52 rounded-xl border border-stroke bg-white shadow-lg overflow-hidden z-50">
                    {/* Info User */}
                    <div className="px-4 py-3 border-b border-stroke bg-gray-3">
                        <p className="text-xs text-body">Masuk sebagai</p>
                        <p className="text-sm font-semibold text-black truncate">{userData?.username}</p>
                        <span className="inline-block mt-1 px-2 py-0.5 rounded-full bg-primary/10 text-primary text-[10px] font-semibold uppercase tracking-wide">
                            {userData?.role ?? "admin"}
                        </span>
                    </div>

                    {/* Aksi */}
                    <div className="py-1.5">
                        <button
                            onClick={logout}
                            className="flex w-full items-center gap-2.5 px-4 py-2.5 text-sm text-danger hover:bg-red/5 transition-colors duration-200"
                        >
                            <LogOut size={15} />
                            Keluar
                        </button>
                    </div>
                </div>
            )}
        </ClickOutside>
    );
};

export default DropdownUser;
