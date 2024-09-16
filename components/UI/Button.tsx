import React, { FC } from 'react'
import { ProgressSpinner } from 'primereact/progressspinner';

type ButtonProps = {
    type: 'submit' | 'reset' | 'button',
    onClick?: () => any,
    disabled?: boolean,
    loading?: boolean,
    className?: string,
    children: React.ReactNode
}

const Button: FC<ButtonProps> = ({ type, className, disabled, loading, onClick, children }) => {
    const onClickButton = () => {
        if (onClick) {
            onClick();
        }
    }
    return (
        <button className={className} type={type} disabled={disabled} onClick={onClickButton}>
            {loading && (
                <div className='flex justify-center'>
                    <ProgressSpinner className='w-6 h-6' strokeWidth='6' color='blue' />
                </div>
            )}
            {!loading && (
                <>{children}</>
            )}
        </button>
    )
}

export default Button