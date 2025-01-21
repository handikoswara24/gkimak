import { JemaatType } from '@/types/jemaat'
import React from 'react'
import EditJemaatButton from './EditJemaatButton'
import DeleteJemaatButton from './DeleteJemaatButton'

type JemaatButtonsProps = {
    data: JemaatType
}

const JemaatButtons = ({data} : JemaatButtonsProps) => {
    return (
        <div className='flex flex-row'>
            <EditJemaatButton data={data} />
            <DeleteJemaatButton data={data} />
        </div>
    )
}

export default JemaatButtons