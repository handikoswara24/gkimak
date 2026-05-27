'use client'

import { useGetSetting } from '@/service/setting-query';
import { ProgressSpinner } from 'primereact/progressspinner';
import React from 'react'
import SettingForm from './SettingForm';
import AdminCard from '../UI/AdminCard';

const SettingWrapper = () => {
    const { data, isLoading, isFetching } = useGetSetting();
    return (
        <AdminCard
            title="Pengaturan Website"
            description="Kelola konten yang tampil di halaman publik website GKIMAK"
            className="max-w-4xl"
        >
            {(isFetching || isLoading) ? (
                <div className='w-full flex justify-center py-12'>
                    <ProgressSpinner className='w-8 h-8' />
                </div>
            ) : data ? (
                <SettingForm data={data} />
            ) : null}
        </AdminCard>
    )
}

export default SettingWrapper
