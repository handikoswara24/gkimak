import { ListRenungan } from '@/types/renunganharian'
import { SettingType } from '@/types/setting'
import React from 'react'
import { useRouter } from 'next/navigation'

type RenunganWrapperProps = {
    setting: SettingType,
    renungan: ListRenungan
}

const RenunganWrapper = ({ setting, renungan }: RenunganWrapperProps) => {
    const router = useRouter();
    return (
        <section className="devotion section" id="devotion">
            <div className="devotion__container container grid">
                <div className="devotion__data">
                    <h2 className="section__title dev__title">Renungan Harian</h2>
                    <p className="devotion__description">
                        Mulailah harimu dengan inspirasi dan penguatan dari Firman Tuhan.
                        Luangkan waktu sejenak untuk berhenti, merenung, dan bersekutu dengan-Nya.
                    </p>
                </div>

                {renungan.renungan.length > 0 && <div className="devotion__maincard">
                    <div className="card__left cursor-pointer" onClick={() => router.push(`/renungan/${renungan.renungan[0].slug}`)}>
                        <div className="card-banner">
                            <img className="banner-img" src={renungan.renungan[0].image[0].url} alt="" />
                        </div>

                        <div className="card-body">
                            <p className="blog-date">{new Date(renungan.renungan[0].date).toDateString()}</p>
                            <h2 className="blog-title">{renungan.renungan[0].title}</h2>
                            <p className="blog-description">
                                {renungan.renungan[0].content.replaceAll(/<[^>]*>?/gm, '').substring(0, 340) + "..."}
                            </p>
                        </div>
                    </div>

                    <div className="devotion__card">
                        {renungan.renungan.map((r, index) => {
                            if (index == 0) {
                                return (
                                    <></>
                                )
                            }
                            return (
                                <div onClick={() => router.push(`/renungan/${renungan.renungan[0].slug}`)}
                                    className="devotion__article border border-solid border-slate-400 cursor-pointer rounded-lg hover:scale-105 transition-transform">
                                    <div className='w-2/5'>
                                        <img src={r.image[0].url} alt="" className='!h-full rounded-l-lg' />
                                    </div>

                                    <div className="devotion__content">
                                        <div className="devotion__text">
                                            <span className="devotion__date">{new Date(r.date).toDateString()}</span>
                                            <h2 className="devotion__title">
                                                {r.title}
                                            </h2>
                                            <p className="devotion__subtitle">
                                                {r.content.replaceAll(/<[^>]*>?/gm, '').substring(0, 200) + "..."}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                }
            </div>
        </section>
    )
}

export default RenunganWrapper