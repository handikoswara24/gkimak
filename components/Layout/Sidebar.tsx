"use client";

import React from "react";
import { usePathname } from "next/navigation";
import ClickOutside from "./ClickOutside";
import SidebarItem from "./SidebarItem";
import useLocalStorage from "../utils/useLocalStorage";
import BookIcon from "../Icons/BookIcon";
import SettingIcon from "../Icons/SettingIcon";
import TagIcon from "../Icons/TagIcon";
import { ContactRound, FolderOutput, Package, SquareMenu, Cross } from "lucide-react";
import Link from "next/link";

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
}

const menuGroups = [
  {
    name: "MENU UTAMA",
    menuItems: [
      {
        icon: (
          <svg className="fill-current" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.0002 7.79065C11.0814 7.79065 12.7689 6.1594 12.7689 4.1344C12.7689 2.1094 11.0814 0.478149 9.0002 0.478149C6.91895 0.478149 5.23145 2.1094 5.23145 4.1344C5.23145 6.1594 6.91895 7.79065 9.0002 7.79065ZM9.0002 1.7719C10.3783 1.7719 11.5033 2.84065 11.5033 4.16252C11.5033 5.4844 10.3783 6.55315 9.0002 6.55315C7.62207 6.55315 6.49707 5.4844 6.49707 4.16252C6.49707 2.84065 7.62207 1.7719 9.0002 1.7719Z" fill="" />
            <path d="M10.8283 9.05627H7.17207C4.16269 9.05627 1.71582 11.5313 1.71582 14.5406V16.875C1.71582 17.2125 1.99707 17.5219 2.3627 17.5219C2.72832 17.5219 3.00957 17.2407 3.00957 16.875V14.5406C3.00957 12.2344 4.89394 10.3219 7.22832 10.3219H10.8564C13.1627 10.3219 15.0752 12.2063 15.0752 14.5406V16.875C15.0752 17.2125 15.3564 17.5219 15.7221 17.5219C16.0877 17.5219 16.3689 17.2407 16.3689 16.875V14.5406C16.2846 11.5313 13.8377 9.05627 10.8283 9.05627Z" fill="" />
          </svg>
        ),
        label: "Users",
        route: "#",
        roles: ["admin"],
        children: [
          { label: "List Users", route: "/admin/listuser" },
          { label: "Tambah User", route: "/admin/adduser" },
        ],
      },
      {
        icon: <BookIcon className="size-[18px]" />,
        label: "Renungan Harian",
        route: "#",
        roles: ["admin"],
        children: [
          { label: "List Renungan", route: "/admin/renunganharian" },
          { label: "Tambah Renungan", route: "/admin/addrenunganharian" },
        ],
      },
      {
        icon: <ContactRound size={18} />,
        label: "Jemaat",
        route: "#",
        roles: ["admin"],
        children: [
          { label: "List Jemaat", route: "/admin/jemaat" },
          { label: "Tambah Jemaat", route: "/admin/addjemaat" },
        ],
      },
      {
        icon: <TagIcon className="size-[18px]" />,
        label: "Kategori Inventaris",
        route: "#",
        roles: ["admin"],
        children: [
          { label: "List Kategori", route: "/admin/inventorycategory" },
          { label: "Tambah Kategori", route: "/admin/addinventorycategory" },
        ],
      },
      {
        icon: <Package size={18} />,
        label: "Inventaris",
        route: "#",
        roles: ["admin"],
        children: [
          { label: "List Inventaris", route: "/admin/inventory" },
          { label: "Tambah Inventaris", route: "/admin/addinventory" },
          { label: "Scan Inventaris", route: "/admin/scaninventory" },
        ],
      },
      {
        icon: <FolderOutput size={18} />,
        label: "Peminjaman",
        route: "#",
        roles: ["admin"],
        children: [
          { label: "List Peminjaman", route: "/admin/borrowitem" },
          { label: "Tambah Peminjaman", route: "/admin/addborrowitem" },
        ],
      },
      {
        icon: <SquareMenu size={18} />,
        label: "Options",
        route: "#",
        roles: ["admin"],
        children: [
          { label: "List Options", route: "/admin/option" },
          { label: "Tambah Option", route: "/admin/addoption" },
        ],
      },
    ],
  },
  {
    name: "PENGATURAN",
    menuItems: [
      {
        icon: <SettingIcon className="size-[18px]" />,
        label: "Setting",
        route: "/admin/setting",
        roles: ["admin"],
        children: null,
      },
    ],
  },
];

const Sidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
  const pathname = usePathname();
  const [pageName, setPageName] = useLocalStorage("selectedMenu", "");

  return (
    <ClickOutside onClick={() => setSidebarOpen(false)}>
      <aside
        className={`fixed left-0 top-0 z-[1000] flex h-screen w-72.5 flex-col overflow-y-hidden bg-[#1e2a3b] duration-300 ease-in-out lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Header Sidebar */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
          <Link href="/admin" className="flex items-center gap-3">
            <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-primary/20 border border-primary/30">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L13.09 8.26L19 7L15.45 12L19 17L13.09 15.74L12 22L10.91 15.74L5 17L8.55 12L5 7L10.91 8.26L12 2Z" fill="#3C50E0"/>
              </svg>
            </div>
            <div>
              <div className="text-white font-bold text-base leading-tight">GKIMAK</div>
              <div className="text-bodydark2 text-[10px] tracking-widest uppercase">Admin Panel</div>
            </div>
          </Link>

          <button
            onClick={() => setSidebarOpen(false)}
            className="block lg:hidden text-bodydark2 hover:text-white transition-colors"
          >
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 5L5 15M5 5l10 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
        </div>

        {/* Menu */}
        <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear flex-1 py-4">
          <nav className="px-4">
            {menuGroups.map((group, groupIndex) => (
              <div key={groupIndex} className={groupIndex > 0 ? "mt-6" : ""}>
                <h3 className="mb-2 px-3 text-[10px] font-semibold tracking-widest text-bodydark2/60 uppercase">
                  {group.name}
                </h3>
                <ul className="flex flex-col gap-0.5">
                  {group.menuItems.map((menuItem, menuIndex) => (
                    <SidebarItem
                      key={menuIndex}
                      item={menuItem}
                      pageName={pageName}
                      setPageName={setPageName}
                    />
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        {/* Footer Sidebar */}
        <div className="px-6 py-4 border-t border-white/10">
          <Link href="/" className="flex items-center gap-2 text-bodydark2 hover:text-white transition-colors text-xs">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
              <polyline points="9,22 9,12 15,12 15,22"/>
            </svg>
            Kembali ke Website
          </Link>
        </div>
      </aside>
    </ClickOutside>
  );
};

export default Sidebar;
