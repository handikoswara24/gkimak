'use client'

import { useGetSetting } from '@/service/setting-query';
import { ProgressSpinner } from 'primereact/progressspinner';
import React from 'react'
import SettingForm from './SettingForm';

const SettingWrapper = () => {
    const { data, isLoading, isFetching } = useGetSetting();
    return (
        <div>
            <div>Setting</div>
            {(isFetching || isLoading) && (
                <div className='w-full flex justify-center'>
                    <ProgressSpinner className='w-8 h-8' />
                </div>
            )}
            {!(isFetching || isLoading) && data && (
                <SettingForm data={data} />
            )}
        </div>
    )
}

export default SettingWrapper