'use client'

import React from 'react'
import Header from '../Homepage/Header'
import Footer from '../Homepage/Footer'
import { ListRenungan } from '@/types/renunganharian'

type RenunganProps = {
    renungan: ListRenungan
}

const Renungan = ({ renungan }: RenunganProps) => {
    console.log(renungan);
    return (
        <>
            <Header />
            <main className="main">
                <section className="home" id="home">

                    <div className="home__container grid">
                        <div className="banner">
                            <div className="container-custom">
                                <h1 className="banner-title">
                                    <span>Firman.</span> Kehidupan. Kebenaran.
                                </h1>
                                <p className="banner-subtitle">Semua tentang Iman, Doa, dan Kedekatan dengan Tuhan</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="design" id="design">
                    <div className="container-custom">
                        <div className="title">
                            <h2>Renungan Terkini</h2>
                            <p>Artikel Terkini Tentang Inspirasi Iman Terkini</p>
                        </div>

                        <div className='flex justify-center !mb-10'>
                            <img src={renungan.renungan[0].image.at(0)?.url} className='max-w-100' />
                        </div>

                        <div className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                            <div className='w-[26rem] h-[26rem] !p-4 text-center flex justify-center items-center' style={{
                                color: renungan.renungan[0].ayatColor ?? "#000000",
                                backgroundColor: renungan.renungan[0].ayatBgColor ?? "#ffffff"
                            }}>
                                <div >
                                    <div className='text-xl font-semibold pb-2'>
                                        {renungan.renungan[0].verse}
                                    </div>
                                    <div dangerouslySetInnerHTML={{ __html: renungan.renungan[0].isiAyat }} className='text-ellipsis max-h-80 overflow-auto'>

                                    </div>
                                </div>
                            </div>
                            <div className='w-[26rem] h-[26rem] !p-4 text-center flex justify-center items-center' style={{
                                color: renungan.renungan[0].renunganColor ?? "#000000",
                                backgroundColor: renungan.renungan[0].renunganBgColor ?? "#ffffff"
                            }}>
                                <div >
                                    <div className='text-xl font-semibold pb-2'>
                                        {renungan.renungan[0].title}
                                    </div>
                                    <div dangerouslySetInnerHTML={{ __html: renungan.renungan[0].content }} className='text-ellipsis max-h-80 overflow-auto'>

                                    </div>
                                </div>
                            </div>
                            <div className='w-[26rem] h-[26rem] !p-4 text-center flex justify-center items-center' style={{
                                color: renungan.renungan[0].refleksiColor ?? "#000000",
                                backgroundColor: renungan.renungan[0].renunganBgColor ?? "#ffffff"
                            }}>
                                <div >
                                    <div className='text-xl font-semibold pb-2'>
                                        {"Refleksi"}
                                    </div>
                                    <div dangerouslySetInnerHTML={{ __html: renungan.renungan[0].refleksi }} className='text-ellipsis max-h-80 overflow-auto'>

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
                            <div className="blog-item">
                                <div className="blog-img">
                                    <img src="/images/blog-p-1.jpg" alt="" />
                                    <span><i className="ri-heart-3-line"></i></span>
                                </div>

                                <div className="blog-text">
                                    <span>20 Februari 2025</span>
                                    <h2>Lorem ipsum, dolor sit amet consectetur adipisicing</h2>
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis libero quas ipsum
                                        laudantium nihil! Quaerat.</p>
                                    <a href="#">Read More</a>
                                </div>
                            </div>

                            <div className="blog-item">
                                <div className="blog-img">
                                    <img src="/images/blog-p-2.jpg" alt="" />
                                    <span><i className="ri-heart-3-line"></i></span>
                                </div>

                                <div className="blog-text">
                                    <span>20 Februari 2025</span>
                                    <h2>Lorem ipsum, dolor sit amet consectetur adipisicing</h2>
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis libero quas ipsum
                                        laudantium nihil! Quaerat.</p>
                                    <a href="#">Read More</a>
                                </div>
                            </div>

                            <div className="blog-item">
                                <div className="blog-img">
                                    <img src="/images/blog-p-3.jpg" alt="" />
                                    <span><i className="ri-heart-3-line"></i></span>
                                </div>

                                <div className="blog-text">
                                    <span>20 Februari 2025</span>
                                    <h2>Lorem ipsum, dolor sit amet consectetur adipisicing</h2>
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis libero quas ipsum
                                        laudantium nihil! Quaerat.</p>
                                    <a href="#">Read More</a>
                                </div>
                            </div>

                            <div className="blog-item">
                                <div className="blog-img">
                                    <img src="/images/blog-p-4.jpg" alt="" />
                                    <span><i className="ri-heart-3-line"></i></span>
                                </div>

                                <div className="blog-text">
                                    <span>20 Februari 2025</span>
                                    <h2>Lorem ipsum, dolor sit amet consectetur adipisicing</h2>
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis libero quas ipsum
                                        laudantium nihil! Quaerat.</p>
                                    <a href="#">Read More</a>
                                </div>
                            </div>

                            <div className="blog-item">
                                <div className="blog-img">
                                    <img src="/images/blog-p-5.jpg" alt="" />
                                    <span><i className="ri-heart-3-line"></i></span>
                                </div>

                                <div className="blog-text">
                                    <span>20 Februari 2025</span>
                                    <h2>Lorem ipsum, dolor sit amet consectetur adipisicing</h2>
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis libero quas ipsum
                                        laudantium nihil! Quaerat.</p>
                                    <a href="#">Read More</a>
                                </div>
                            </div>

                            <div className="blog-item">
                                <div className="blog-img">
                                    <img src="/images/blog-p-6.jpg" alt="" />
                                    <span><i className="ri-heart-3-line"></i></span>
                                </div>

                                <div className="blog-text">
                                    <span>20 Februari 2025</span>
                                    <h2>Lorem ipsum, dolor sit amet consectetur adipisicing</h2>
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis libero quas ipsum
                                        laudantium nihil! Quaerat.</p>
                                    <a href="#">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default Renungan