'use client'
import React, { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { Menu, X, Youtube } from 'lucide-react'

const navLinks = [
    { href: '/test', label: 'Home', match: (p: string) => p === '/' || p.includes('test') },
    { href: '/about', label: 'Tentang', match: (p: string) => p.includes('about') },
    { href: '/renungan', label: 'Renungan', match: (p: string) => p.includes('renungan') },
    { href: '/warta', label: 'Warta', match: (p: string) => p.includes('warta') },
]

const Header = () => {
    const pathname = usePathname()
    const [scrolled, setScrolled] = useState(false)
    const [open, setOpen] = useState(false)

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 10)
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                scrolled
                    ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100'
                    : 'bg-transparent'
            }`}
        >
            <nav className="w-full px-8 h-16 flex items-center">

                {/* Kolom kiri — Logo */}
                <div className="flex-1 flex items-center">
                    <a href="/test" className="flex items-center gap-2">
                        <img src="/images/logo.png" alt="GKIMAK" className="h-8 w-8 object-contain" />
                        <span className={`font-semibold text-sm hidden sm:block transition-colors ${scrolled ? 'text-gray-800' : 'text-white'}`}>
                            GKIm Amanat Kristus
                        </span>
                    </a>
                </div>

                {/* Kolom tengah — Nav links */}
                <ul className="hidden md:flex items-center gap-6">
                    {navLinks.map(link => {
                        const active = link.match(pathname)
                        return (
                            <li key={link.href}>
                                <a
                                    href={link.href}
                                    className={`text-sm font-medium transition-colors border-b-2 ${
                                        active
                                            ? scrolled
                                                ? 'text-[#8C4F8C] border-[#8C4F8C]'
                                                : 'text-white border-white'
                                            : scrolled
                                                ? 'text-gray-600 border-transparent hover:text-[#8C4F8C]'
                                                : 'text-white/80 border-transparent hover:text-white'
                                    }`}
                                    style={{ paddingBottom: '2px' }}
                                >
                                    {link.label}
                                </a>
                            </li>
                        )
                    })}
                </ul>

                {/* Kolom kanan — Live + hamburger */}
                <div className="flex-1 flex items-center justify-end gap-3">
                    <a
                        href="https://youtube.com/@GKImAmanat/streams"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`hidden md:flex items-center gap-1.5 rounded-full text-xs font-semibold border transition-all ${
                            scrolled
                                ? 'border-red-500 text-red-500 hover:bg-red-500 hover:text-white'
                                : 'border-white/60 text-white/90 hover:bg-white/15'
                        }`}
                        style={{ padding: '6px 16px' }}
                    >
                        <Youtube size={13} />
                        Live
                    </a>
                    <button
                        className={`md:hidden p-2 rounded-lg transition-colors ${
                            scrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
                        }`}
                        onClick={() => setOpen(!open)}
                        aria-label="Toggle menu"
                    >
                        {open ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </div>

            </nav>

            {/* Mobile menu */}
            <div className={`md:hidden overflow-hidden transition-all duration-300 ${open ? 'max-h-80' : 'max-h-0'}`}>
                <div className="bg-white border-t border-gray-100 px-4 py-3 space-y-1">
                    {navLinks.map(link => {
                        const active = link.match(pathname)
                        return (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={() => setOpen(false)}
                                className={`flex items-center px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                                    active
                                        ? 'bg-[#8C4F8C]/10 text-[#8C4F8C]'
                                        : 'text-gray-600 hover:bg-gray-50'
                                }`}
                            >
                                {link.label}
                            </a>
                        )
                    })}
                    <a
                        href="https://youtube.com/@GKImAmanat/streams"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setOpen(false)}
                        className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium text-red-500 hover:bg-red-50 transition-colors"
                    >
                        <Youtube size={14} />
                        Live di YouTube
                    </a>
                </div>
            </div>
        </header>
    )
}

export default Header