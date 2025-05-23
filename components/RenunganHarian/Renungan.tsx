'use client'

import React from 'react'
import Header from '../Homepage/Header'
import Footer from '../Homepage/Footer'
import { ListRenungan } from '@/types/renunganharian'
import { SettingType } from '@/types/setting'
import { RENUNGAN1, RENUNGAN2, RENUNGAN3 } from '@/constants/imageConstant'

type RenunganProps = {
    renungan: ListRenungan,
    setting: SettingType,
}

const Renungan = ({ renungan, setting }: RenunganProps) => {
    if (renungan.renungan.length == 0) {
        return (
            <></>
        )
    }
    return (
        <>
            <Header />
            <main className="main">
                <section className="home" id="home">

                    <div className="home__container grid">
                        <div className="banner">
                            <div className="container-custom">
                                <h1 className="banner-title">
                                    {setting.renunganTitle1}
                                </h1>
                                <div className="banner-subtitle" dangerouslySetInnerHTML={{ __html: setting.renunganDesc1 }}>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="design" id="design">
                    <div className="container-custom">
                        <div className="title">
                            <h2>{setting.renunganTitle2}</h2>
                            <div dangerouslySetInnerHTML={{ __html: setting.renunganDesc2 }}></div>
                        </div>

                        {/* <div className='flex justify-center !mb-10'>
                            <img src={renungan.renungan[0].image.at(0)?.url} className='max-w-100' />
                        </div> */}

                        <div className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                            <div className='w-[26rem] h-[26rem] !p-4 text-center flex justify-center items-center' style={{
                                backgroundImage: `url("${RENUNGAN1}")`,
                                backgroundSize: "cover"
                            }}>
                                <div >
                                    <div className='text-xl font-semibold pb-2 text-white'>
                                        {renungan.renungan[0].verse}
                                    </div>
                                    <div dangerouslySetInnerHTML={{ __html: renungan.renungan[0].isiAyat }} className='hide-scroll text-white text-ellipsis max-h-80 overflow-auto'>

                                    </div>
                                </div>
                            </div>
                            <div className='w-[26rem] h-[26rem] !p-4 text-center flex justify-center items-center' style={{
                                backgroundImage: `url("${RENUNGAN2}")`,
                                backgroundSize: "cover",
                            }}>
                                <div className='bg-slate-100 opacity-90'>
                                    <div className='text-slate-600 text-xl font-semibold pb-2'>
                                        {renungan.renungan[0].title}
                                    </div>
                                    <div dangerouslySetInnerHTML={{ __html: renungan.renungan[0].content }} className='text-slate-600 hide-scroll text-ellipsis max-h-80 overflow-auto'>

                                    </div>
                                </div>
                            </div>
                            <div className='w-[26rem] h-[26rem] !p-4 text-center flex justify-center items-center' style={{
                                backgroundImage: `url("${RENUNGAN3}")`,
                                backgroundSize: "cover"
                            }}>
                                <div className='bg-slate-100 opacity-90'>
                                    <div className='text-xl font-semibold pb-2 text-slate-600'>
                                        {"Refleksi"}
                                    </div>
                                    <div dangerouslySetInnerHTML={{ __html: renungan.renungan[0].refleksi }} className='text-slate-600 hide-scroll text-ellipsis max-h-80 overflow-auto'>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="blog" id="blog">
                    <div className="container-custom">
                        <div className="title">
                            <h2>Renungan Terbaru</h2>
                            <p>Artikel Terbaru tentang Kedekatan dengan Tuhan</p>
                        </div>



                        <div className="blog-content">

                            {renungan.renungan.slice(1, 7).map((r) => {
                                return (
                                    <div className="blog-item" key={r._id}>
                                        <div className="blog-img">
                                            <img src={r.image.at(0)?.url} alt="" />
                                            {/* <span><i className="ri-heart-3-line"></i></span> */}
                                        </div>

                                        <div className="blog-text">
                                            <span>{new Date(r.date).toDateString()}</span>
                                            <h2>{r.title}</h2>
                                            <p>{r.content.replaceAll(/<[^>]*>?/gm, '').substring(0, 220) + "..."}</p>
                                            <a href={`/renungan/${r.slug}`}>Read More</a>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default Renungan