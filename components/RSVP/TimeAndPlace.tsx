import React from 'react'

const TimeAndPlace = () => {
    return (
        <>
            <div className='flex justify-center mt-4 mx-4'>
                <div className='border-2 rounded-xl border-orange'>
                    <div className='mt-8 border-t border-orange text-xl text-center py-4 font-bold'>
                        HUT 35<sup>th</sup> GKIm Amanat Kristus
                    </div>
                    <div className='flex items-center px-8 pb-6'>
                        <div className='text-3xl font-semibold pr-8 space-y-2'>
                            <div>
                                17
                            </div>
                            <div>
                                10
                            </div>
                            <div>
                                24
                            </div>
                        </div>
                        <div className='border-l border-orange pl-8 text-sm'>
                            <div className='pb-4 border-b border-orange'>
                                <div>
                                    Tanggal dan Waktu
                                </div>
                                <div className='font-bold text-xl'>
                                    Kamis 17 Oktober 2024
                                </div>
                                <div className='font-bold text-xl'>
                                    18.00 WIB
                                </div>
                            </div>
                            <div className='pt-4'>
                                <div>
                                    Tempat
                                </div>
                                <div className='font-bold text-xl'>
                                    GKIm Amanat Kristus
                                </div>
                                <div>
                                    Jl Wahid Hasyim/Kopo no. 246 Bandung 40233
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-center mt-4 mx-4'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d990.1513889666697!2d107.59366326964522!3d-6.937655668280826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNsKwNTYnMTUuNiJTIDEwN8KwMzUnMzkuNSJF!5e0!3m2!1sid!2sid!4v1726931859080!5m2!1sid!2sid"
                    width="600" height="225" loading="lazy" ></iframe>
            </div>
        </>

    )
}

export default TimeAndPlace