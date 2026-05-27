'use client'

import HeaderAdmin from "@/components/Layout/HeaderAdmin";
import Sidebar from "@/components/Layout/Sidebar";
import { useState } from "react";

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    return (
        <div className="min-h-screen bg-whiten">
            <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
            <div className="relative flex flex-1 flex-col lg:ml-72.5 min-h-screen">
                <HeaderAdmin sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
                <main className="flex-1">
                    <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-8">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    )
}
