'use client'

import React from 'react'
import RenunganCardWrapper from './RenunganCardWrapper'
import Header from '../Homepage/Header'
import Footer from '../Homepage/Footer'

const ListRenunganPage = () => {
  return (
    <>
      <Header />
      {/* Hero */}
      <section
        className="relative flex items-end min-h-[300px] bg-gradient-to-br from-[#2D1B2E] to-[#8C4F8C] overflow-hidden"
        style={{ paddingTop: '4rem' }}
      >
        {/* decorative circles */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/3 -translate-y-1/2 pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-64 h-64 bg-white/5 rounded-full translate-y-1/2 pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-16">
          <span className="inline-block text-xs font-semibold text-white/60 uppercase tracking-widest mb-3">
            GKIm Amanat Kristus
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold text-white mb-4 leading-tight">
            Renungan Harian
          </h1>
          <p className="text-white/70 max-w-xl text-base leading-relaxed">
            Temukan inspirasi rohani dan refleksi iman setiap hari bersama komunitas GKIm Amanat Kristus.
          </p>
        </div>
      </section>

      {/* Cards */}
      <main className="bg-gray-50 min-h-screen">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
          <RenunganCardWrapper />
        </div>
      </main>

      <Footer />
    </>
  )
}

export default ListRenunganPage