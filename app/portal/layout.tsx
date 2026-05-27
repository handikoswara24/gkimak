export default function LoginLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <section className="min-h-screen flex bg-[#1e2a3b]">
            {/* Panel kiri — branding */}
            <div className="hidden lg:flex lg:w-1/2 flex-col justify-between p-12 bg-gradient-to-br from-[#1e2a3b] to-[#162034]">
                <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-primary/20 border border-primary/30">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2L13.09 8.26L19 7L15.45 12L19 17L13.09 15.74L12 22L10.91 15.74L5 17L8.55 12L5 7L10.91 8.26L12 2Z" fill="#3C50E0"/>
                        </svg>
                    </div>
                    <span className="text-white font-bold text-lg">GKIMAK</span>
                </div>

                <div>
                    <h1 className="text-4xl font-bold text-white leading-tight mb-4">
                        Selamat Datang<br />di Admin Panel
                    </h1>
                    <p className="text-bodydark2 text-base leading-relaxed">
                        Kelola konten, jemaat, inventaris, dan<br />renungan harian GKIm Amanat Kristus.
                    </p>
                </div>

                <p className="text-bodydark2/50 text-xs">
                    © {new Date().getFullYear()} GKIm Amanat Kristus. All rights reserved.
                </p>
            </div>

            {/* Panel kanan — form login */}
            <div className="flex-1 flex items-center justify-center p-6 bg-white">
                <div className="w-full max-w-sm">
                    {/* Logo mobile */}
                    <div className="flex items-center gap-2 mb-8 lg:hidden">
                        <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 border border-primary/20">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                <path d="M12 2L13.09 8.26L19 7L15.45 12L19 17L13.09 15.74L12 22L10.91 15.74L5 17L8.55 12L5 7L10.91 8.26L12 2Z" fill="#3C50E0"/>
                            </svg>
                        </div>
                        <span className="font-bold text-black">GKIMAK</span>
                    </div>

                    {children}
                </div>
            </div>
        </section>
    )
}
