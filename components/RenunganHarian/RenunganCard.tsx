import { RenunganHarianType } from '@/types/renunganharian'
import React from 'react';
import { useRouter } from 'next/navigation';

type RenunganCardProps = {
    data: RenunganHarianType,
    isFirst?: boolean
}

const RenunganCard = ({ data, isFirst = false }: RenunganCardProps) => {
    const router = useRouter();
    return (
        <div className="card" key={data._id} onClick={() => router.push(`/renungan/${data.slug}`)}>
            <div className="card-banner">
                {isFirst && (
                    <p className="category-tag popular">Daily Fresh</p>
                )}
                <img className="banner-img" src={data.image[0].url} alt='' />
            </div>
            <div className="card-body">
                <p className="blog-hashtag">#{new Date(data.date).toDateString()} #renunganharian</p>
                <h2 className="blog-title">{data.title}</h2>
                <p className="blog-description">{data.content.replaceAll(/<[^>]*>?/gm, '').substring(0, 220) + "..."}</p>

                <div className="card-profile">
                    <div className="card-profile-info">
                        <h3 className="profile-name">{data.author}</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RenunganCard