'use client'

import { RenunganHarianType } from '@/types/renunganharian'
import React from 'react'
import Header from '../Homepage/Header'
import Footer from '../Homepage/Footer'
import Link from 'next/link'
import { ArrowLeft, CalendarDays, User } from 'lucide-react'

type RenunganHarianDetailProps = {
    data: RenunganHarianType
}

const RenunganHarianDetail = ({ data }: RenunganHarianDetailProps) => {
    return (
        <>
            <Header />
            <main className="min-h-screen bg-gray-50 py-12">
                <div className="max-w-3xl mx-auto px-4 sm:px-6">
                    {/* Back link */}
                    <Link href="/renungan" className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-800 mb-8 transition-colors">
                        <ArrowLeft size={16} />
                        Kembali ke Renungan
                    </Link>

                    <article className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                        {/* Cover image */}
                        {data.image?.[0]?.url && (
                            <div className="w-full aspect-video overflow-hidden">
                                <img
                                    src={data.image[0].url}
                                    alt={data.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        )}

                        <div className="p-6 sm:p-10">
                            {/* Meta */}
                            <div className="flex flex-wrap items-center gap-4 text-xs text-gray-400 mb-4">
                                <span className="flex items-center gap-1">
                                    <CalendarDays size={13} />
                                    {new Date(data.date).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}
                                </span>
                                <span className="flex items-center gap-1">
                                    <User size={13} />
                                    {data.author}
                                </span>
                            </div>

                            {/* Title */}
                            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 leading-snug">
                                {data.title}
                            </h1>

                            {/* Verse highlight */}
                            {data.verse && (
                                <blockquote className="border-l-4 border-primary pl-4 py-2 mb-6 bg-primary/5 rounded-r-lg">
                                    <p className="text-sm sm:text-base text-gray-700 italic">{data.verse}</p>
                                    {data.isiAyat && (
                                        <div
                                            className="text-sm text-gray-600 mt-2"
                                            dangerouslySetInnerHTML={{ __html: data.isiAyat }}
                                        />
                                    )}
                                </blockquote>
                            )}

                            {/* Main content */}
                            <div
                                dangerouslySetInnerHTML={{ __html: data.content }}
                                className="prose prose-sm sm:prose max-w-none text-gray-700 leading-relaxed"
                            />

                            {/* Refleksi */}
                            {data.refleksi && (
                                <div className="mt-8 p-5 bg-blue-50 rounded-xl border border-blue-100">
                                    <h3 className="font-semibold text-gray-800 mb-3 text-base">Refleksi</h3>
                                    <div
                                        dangerouslySetInnerHTML={{ __html: data.refleksi }}
                                        className="prose prose-sm max-w-none text-gray-700"
                                    />
                                </div>
                            )}

                            {/* Author footer */}
                            <div className="mt-8 pt-6 border-t border-gray-100 flex items-center gap-3">
                                <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
                                    {data.author?.charAt(0)?.toUpperCase()}
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-gray-800">{data.author}</p>
                                    <p className="text-xs text-gray-400">Penulis Renungan</p>
                                </div>
                            </div>
                        </div>
                    </article>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default RenunganHarianDetail