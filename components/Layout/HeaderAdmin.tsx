"use client"

import React from 'react'
import DropdownUser from './DropDownUser';
import { usePathname } from 'next/navigation';
import { Menu } from 'lucide-react';

const routeTitles: Record<string, string> = {
  '/admin': 'Dashboard',
  '/admin/listuser': 'List Users',
  '/admin/adduser': 'Tambah User',
  '/admin/renunganharian': 'Renungan Harian',
  '/admin/addrenunganharian': 'Tambah Renungan',
  '/admin/jemaat': 'Data Jemaat',
  '/admin/addjemaat': 'Tambah Jemaat',
  '/admin/inventorycategory': 'Kategori Inventaris',
  '/admin/addinventorycategory': 'Tambah Kategori',
  '/admin/inventory': 'Inventaris',
  '/admin/addinventory': 'Tambah Inventaris',
  '/admin/scaninventory': 'Scan Inventaris',
  '/admin/borrowitem': 'Peminjaman',
  '/admin/addborrowitem': 'Tambah Peminjaman',
  '/admin/option': 'Options',
  '/admin/addoption': 'Tambah Option',
  '/admin/setting': 'Pengaturan',
};

const HeaderAdmin = (props: {
    sidebarOpen: string | boolean | undefined;
    setSidebarOpen: (arg0: boolean) => void;
}) => {
    const pathname = usePathname();
    const pageTitle = routeTitles[pathname] ?? 'Admin';

    return (
        <header className="sticky top-0 z-999 flex w-full bg-white border-b border-stroke">
            <div className="flex flex-grow items-center justify-between px-4 py-3 md:px-6">
                {/* Kiri: Hamburger + Judul Halaman */}
                <div className="flex items-center gap-4">
                    <button
                        aria-controls="sidebar"
                        onClick={(e) => {
                            e.stopPropagation();
                            props.setSidebarOpen(!props.sidebarOpen);
                        }}
                        className="lg:hidden flex items-center justify-center w-9 h-9 rounded-lg border border-stroke text-body hover:bg-gray hover:text-black transition-colors"
                    >
                        <Menu size={18} />
                    </button>

                    <div className="hidden lg:flex items-center gap-2 text-sm text-body">
                        <span className="text-bodydark2">Admin</span>
                        <span className="text-bodydark2">/</span>
                        <span className="text-black font-semibold">{pageTitle}</span>
                    </div>

                    <div className="lg:hidden">
                        <h1 className="text-sm font-semibold text-black">{pageTitle}</h1>
                    </div>
                </div>

                {/* Kanan: User Dropdown */}
                <div className="flex items-center gap-3">
                    <DropdownUser />
                </div>
            </div>
        </header>
    )
}

export default HeaderAdmin
