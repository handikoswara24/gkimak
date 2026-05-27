import React from 'react'
import { useModalAction } from '../utils/ModalProvider'
import { X } from 'lucide-react'

type EditModalShellProps = {
    title: string
    description?: string
    maxWidth?: 'sm' | 'md' | 'lg' | 'xl'
    children: React.ReactNode
}

const maxWidthMap = {
    sm: 'max-w-sm',
    md: 'max-w-xl',
    lg: 'max-w-2xl',
    xl: 'max-w-4xl',
}

const EditModalShell = ({ title, description, maxWidth = 'md', children }: EditModalShellProps) => {
    const { closeModal } = useModalAction();

    return (
        <div className="min-h-screen bg-whiten py-8 px-4">
            <div className={`mx-auto ${maxWidthMap[maxWidth]}`}>
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                    <div>
                        <h1 className="text-xl font-semibold text-black">{title}</h1>
                        {description && <p className="text-sm text-body mt-1">{description}</p>}
                    </div>
                    <button
                        onClick={closeModal}
                        className="flex items-center justify-center w-9 h-9 rounded-lg border border-stroke text-body hover:bg-gray hover:text-black transition-colors flex-shrink-0 ml-4"
                    >
                        <X size={16} />
                    </button>
                </div>

                {/* Form Card */}
                <div className="rounded-xl border border-stroke bg-white shadow-sm p-6">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default EditModalShell
