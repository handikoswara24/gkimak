import { RenunganHarianType } from '@/types/renunganharian'
import React from 'react';
import { useRouter } from 'next/navigation';
import { CalendarDays } from 'lucide-react';

type RenunganCardProps = {
    data: RenunganHarianType,
    isFirst?: boolean
}

const RenunganCard = ({ data, isFirst = false }: RenunganCardProps) => {
    const router = useRouter();
    const excerpt = data.content.replaceAll(/<[^>]*>?/gm, '').substring(0, 140) + '...'
    const dateStr = new Date(data.date).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })

    return (
        <article
            key={data._id}
            onClick={() => router.push(`/renungan/${data.slug}`)}
            className="group cursor-pointer bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col"
        >
            {/* Image */}
            <div className="relative overflow-hidden aspect-[16/9]">
                <img
                    src={data.image[0]?.url}
                    alt={data.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {isFirst && (
                    <span className="absolute top-3 left-3 bg-[#8C4F8C] text-white text-xs font-semibold px-2.5 py-1 rounded-full">
                        Terbaru
                    </span>
                )}
            </div>

            {/* Body */}
            <div className="flex flex-col flex-1 p-5">
                <div className="flex items-center gap-1.5 text-xs text-gray-400 mb-2">
                    <CalendarDays size={12} />
                    <span>{dateStr}</span>
                </div>
                <h2 className="text-gray-900 font-semibold text-base leading-snug mb-2 group-hover:text-[#8C4F8C] transition-colors line-clamp-2">
                    {data.title}
                </h2>
                <p className="text-gray-500 text-sm leading-relaxed flex-1 line-clamp-3">
                    {excerpt}
                </p>
                <div className="mt-4 flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-[#8C4F8C]/15 flex items-center justify-center text-[#8C4F8C] font-bold text-xs flex-shrink-0">
                        {data.author?.charAt(0)?.toUpperCase()}
                    </div>
                    <span className="text-xs text-gray-500 font-medium">{data.author}</span>
                </div>
            </div>
        </article>
    )
}

export default RenunganCard