import { ListRenungan } from '@/types/renunganharian'
import { SettingType } from '@/types/setting'
import React from 'react'
import RenunganCard from '../RenunganHarian/RenunganCard'
import { useRouter } from 'next/navigation'

type RenunganWrapperProps = {
    setting: SettingType,
    renungan: ListRenungan
}

const RenunganWrapper = ({ setting, renungan }: RenunganWrapperProps) => {
    const router = useRouter();
    return (
        <section className="place section container" id="place">
            <h2 className="section__title">Daily Devotional</h2>
            <p className="section__subtitle">Start your day with inspiration and encouragement from God's Word.
                Our daily devotionals provide short reflections, meaningful scriptures, and practical applications
                to help you grow in faith and walk closer with God every day.
                Take a moment to pause, reflect, and connect with Him.</p>

            <div className="renungan section" id="renungan">
                <div className="!grid grid-cols-1 md:grid-cols-2 !gap-4 lg:grid-cols-3">
                    {renungan.renungan.map((r,i) => {
                        return (
                            <RenunganCard data={r} isFirst={i == 0} />
                        )
                    })}
                </div>
            </div>

            <div className='cursor-pointer mt-1' onClick={() => router.push(`/renungan`)}>
                See More
            </div>
        </section>
    )
}

export default RenunganWrapper