import React from 'react'

type AdminCardProps = {
    title?: string
    description?: string
    action?: React.ReactNode
    children: React.ReactNode
    className?: string
}

const AdminCard = ({ title, description, action, children, className = "" }: AdminCardProps) => {
    return (
        <div className={`rounded-xl border border-stroke bg-white shadow-sm ${className}`}>
            {(title || action) && (
                <div className="flex items-center justify-between px-6 py-4 border-b border-stroke">
                    <div>
                        {title && <h2 className="text-base font-semibold text-black">{title}</h2>}
                        {description && <p className="text-xs text-body mt-0.5">{description}</p>}
                    </div>
                    {action && <div>{action}</div>}
                </div>
            )}
            <div className="p-6">
                {children}
            </div>
        </div>
    )
}

export default AdminCard
