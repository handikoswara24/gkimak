"use client"

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SidebarDropdown = ({ item }: any) => {
  const pathname = usePathname();

  return (
    <ul className="mt-1 mb-2 flex flex-col gap-0.5 pl-4 pr-2 border-l border-white/10 ml-6">
      {item.map((child: any, index: number) => (
        <li key={index}>
          <Link
            href={child.route}
            className={`flex items-center gap-2 rounded-md px-3 py-2 text-xs font-medium duration-200 ease-in-out
              ${pathname === child.route
                ? "text-white bg-white/10"
                : "text-bodydark2 hover:text-white hover:bg-white/5"
              }`}
          >
            <span className={`w-1 h-1 rounded-full flex-shrink-0 ${pathname === child.route ? "bg-primary" : "bg-bodydark2/50"}`} />
            {child.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default SidebarDropdown;
