import React from 'react'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

type FormCardProps = {
    title: string
    description?: string
    backHref?: string
    children: React.ReactNode
    maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
}

const maxWidthMap = {
    sm: 'max-w-sm',
    md: 'max-w-xl',
    lg: 'max-w-2xl',
    xl: 'max-w-4xl',
    full: 'max-w-full',
}

const FormCard = ({ title, description, backHref, children, maxWidth = 'md' }: FormCardProps) => {
    return (
        <div className={`${maxWidthMap[maxWidth]}`}>
            {/* Header */}
            <div className="mb-6">
                {backHref && (
                    <Link
                        href={backHref}
                        className="inline-flex items-center gap-1.5 text-sm text-body hover:text-primary transition-colors mb-3"
                    >
                        <ArrowLeft size={15} />
                        Kembali
                    </Link>
                )}
                <h1 className="text-xl font-semibold text-black">{title}</h1>
                {description && <p className="text-sm text-body mt-1">{description}</p>}
            </div>

            {/* Form Card */}
            <div className="rounded-xl border border-stroke bg-white shadow-sm p-6">
                {children}
            </div>
        </div>
    )
}

export default FormCard
