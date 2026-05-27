import React from 'react'

const SocialIcon = ({ href, label, children }: { href: string, label: string, children: React.ReactNode }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        className="w-10 h-10 rounded-xl bg-white/8 border border-white/10 hover:border-[#8C4F8C]/60 hover:bg-[#8C4F8C]/20 flex items-center justify-center text-white/60 hover:text-white transition-all duration-200"
    >
        {children}
    </a>
)

const FooterLink = ({ href, children }: { href: string, children: React.ReactNode }) => (
    <li style={{ marginBottom: '0.75rem' }}>
        <a
            href={href}
            className="group flex items-center text-sm text-white/50 hover:text-white transition-colors duration-200"
            style={{ gap: '0.375rem' }}
        >
            <span className="w-1 h-1 rounded-full bg-[#8C4F8C]/60 group-hover:bg-[#8C4F8C] transition-colors flex-shrink-0" />
            {children}
        </a>
    </li>
)

const Footer = () => {
    return (
        <footer className="bg-[#1a0f1b] text-white">

            {/* Top accent line */}
            <div className="h-0.5 bg-gradient-to-r from-transparent via-[#8C4F8C] to-transparent" />

            {/* Main content */}
            <div style={{ maxWidth: '72rem', margin: '0 auto', padding: '6rem 4rem 2.5rem' }}>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12">

                    {/* Brand — wider column */}
                    <div className="md:col-span-5">
                        <div className="flex items-center gap-3" style={{ marginBottom: '1.25rem' }}>
                            <img
                                src="/images/logo.png"
                                alt="GKIMAK"
                                className="w-10 h-10 object-contain flex-shrink-0"
                            />
                            <div>
                                <p className="font-bold text-white text-base leading-tight">GKIm Amanat Kristus</p>
                                <p className="text-white/40 text-xs" style={{ marginTop: '0.125rem' }}>Gereja Kristen Indonesia</p>
                            </div>
                        </div>

                        <p className="text-white/50 text-sm leading-relaxed" style={{ marginBottom: '0.5rem' }}>
                            Jalan Raya Kopo No. 246, Bandung.
                        </p>
                        <p className="text-white/50 text-sm leading-relaxed" style={{ marginBottom: '1.5rem' }}>
                            Melayani dengan kasih, bertumbuh dalam iman.
                        </p>

                        {/* Social media */}
                        <div className="flex items-center" style={{ gap: '0.625rem' }}>
                            <SocialIcon href="https://www.facebook.com/GKIm-Jemaat-Amanat-Kristus-100067535020856/" label="Facebook">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                                </svg>
                            </SocialIcon>
                            <SocialIcon href="https://www.instagram.com/gkimamanat" label="Instagram">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                                </svg>
                            </SocialIcon>
                            <SocialIcon href="https://www.youtube.com/@GKImAmanat" label="YouTube">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z"/>
                                </svg>
                            </SocialIcon>
                        </div>
                    </div>

                    {/* Nav links */}
                    <div className="md:col-span-7 grid grid-cols-3 gap-8">
                        <div>
                            <h4 className="text-xs font-bold text-white/80 uppercase tracking-widest" style={{ marginBottom: '1.25rem' }}>
                                Tentang
                            </h4>
                            <ul style={{ listStyle: 'none' }}>
                                <FooterLink href="/about">Tentang Kami</FooterLink>
                                <FooterLink href="/about">Visi &amp; Misi</FooterLink>
                                <FooterLink href="/about">Hubungi Kami</FooterLink>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-xs font-bold text-white/80 uppercase tracking-widest" style={{ marginBottom: '1.25rem' }}>
                                Renungan
                            </h4>
                            <ul style={{ listStyle: 'none' }}>
                                <FooterLink href="/renungan">Ayat Harian</FooterLink>
                                <FooterLink href="/renungan">Renungan Terkini</FooterLink>
                                <FooterLink href="/renungan">Refleksi Diri</FooterLink>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-xs font-bold text-white/80 uppercase tracking-widest" style={{ marginBottom: '1.25rem' }}>
                                Warta
                            </h4>
                            <ul style={{ listStyle: 'none' }}>
                                <FooterLink href="/warta">Event</FooterLink>
                                <FooterLink href="/warta">Jadwal Pelayanan</FooterLink>
                                <FooterLink href="/warta">Kebaktian</FooterLink>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Divider */}
            <div style={{ maxWidth: '72rem', margin: '0 auto', paddingLeft: '4rem', paddingRight: '4rem' }}>
                <div className="h-px bg-white/8" />
            </div>

            {/* Bottom bar */}
            <div
                className="flex flex-col sm:flex-row items-center justify-between gap-3"
                style={{ maxWidth: '72rem', margin: '0 auto', padding: '1.25rem 4rem' }}
            >
                <p className="text-white/30 text-xs">
                    © {new Date().getFullYear()} GKIm Amanat Kristus. All rights reserved.
                </p>
                <a
                    href="/portal/login"
                    className="text-white/30 hover:text-white/60 text-xs transition-colors duration-200"
                >
                    Admin Panel →
                </a>
            </div>
        </footer>
    )
}

export default Footer