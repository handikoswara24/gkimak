"use client"

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SidebarDropdown from "./SidebarDropdown";
import { ChevronDown } from "lucide-react";

const SidebarItem = ({ item, pageName, setPageName }: any) => {
  const handleClick = () => {
    const updatedPageName =
      pageName !== item.label.toLowerCase() ? item.label.toLowerCase() : "";
    return setPageName(updatedPageName);
  };

  const pathname = usePathname();

  const isActive = (item: any): boolean => {
    if (item.route === pathname) return true;
    if (item.children) {
      return item.children.some((child: any) => isActive(child));
    }
    return false;
  };

  const isItemActive = isActive(item);
  const isOpen = pageName === item.label.toLowerCase();

  return (
    <li>
      <Link
        href={item.route}
        onClick={handleClick}
        className={`group relative flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium duration-200 ease-in-out
          ${isItemActive
            ? "bg-primary/20 text-white"
            : "text-bodydark1 hover:bg-white/5 hover:text-white"
          }`}
      >
        {/* Indikator aktif di kiri */}
        {isItemActive && (
          <span className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-5 rounded-r-full bg-primary" />
        )}

        <span className={`flex-shrink-0 ${isItemActive ? "text-primary" : "text-bodydark2 group-hover:text-white"}`}>
          {item.icon}
        </span>

        <span className="flex-1 leading-snug">{item.label}</span>

        {item.children && (
          <ChevronDown
            size={14}
            className={`flex-shrink-0 text-bodydark2 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
          />
        )}
      </Link>

      {item.children && (
        <div
          className={`overflow-hidden transition-all duration-200 ease-in-out ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <SidebarDropdown item={item.children} />
        </div>
      )}
    </li>
  );
};

export default SidebarItem;
