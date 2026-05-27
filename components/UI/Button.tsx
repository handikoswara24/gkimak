import React, { FC } from 'react'
import { Loader2 } from 'lucide-react'

type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'outline' | 'ghost'
type ButtonSize = 'sm' | 'md' | 'lg'

type ButtonProps = {
    type: 'submit' | 'reset' | 'button'
    onClick?: () => any
    disabled?: boolean
    loading?: boolean
    className?: string
    variant?: ButtonVariant
    size?: ButtonSize
    fullWidth?: boolean
    children: React.ReactNode
}

const variantStyles: Record<ButtonVariant, string> = {
    primary: 'bg-primary text-white hover:bg-primary/90 disabled:bg-primary/40 disabled:cursor-not-allowed',
    secondary: 'bg-gray-2 text-black hover:bg-stroke disabled:bg-gray-2/50 disabled:cursor-not-allowed',
    danger: 'bg-danger text-white hover:bg-danger/90 disabled:bg-danger/40 disabled:cursor-not-allowed',
    outline: 'border border-primary text-primary hover:bg-primary hover:text-white disabled:border-stroke disabled:text-body disabled:cursor-not-allowed',
    ghost: 'text-body hover:bg-gray-2 hover:text-black disabled:text-stroke disabled:cursor-not-allowed',
}

const sizeStyles: Record<ButtonSize, string> = {
    sm: 'px-3 py-1.5 text-xs rounded-lg',
    md: 'px-4 py-2.5 text-sm rounded-lg',
    lg: 'px-6 py-3 text-sm rounded-lg',
}

const Button: FC<ButtonProps> = ({
    type,
    className,
    disabled,
    loading,
    onClick,
    variant = 'primary',
    size = 'md',
    fullWidth = false,
    children
}) => {
    const onClickButton = () => {
        if (onClick) onClick()
    }

    return (
        <button
            className={`
                inline-flex items-center justify-center gap-2 font-medium
                transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary/30
                ${variantStyles[variant]}
                ${sizeStyles[size]}
                ${fullWidth ? 'w-full' : ''}
                ${className ?? ''}
            `}
            type={type}
            disabled={disabled || loading}
            onClick={onClickButton}
        >
            {loading && <Loader2 size={15} className="animate-spin" />}
            {children}
        </button>
    )
}

export default Button
