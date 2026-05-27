import React from 'react'

type FormFieldProps = {
    label: string
    htmlFor?: string
    required?: boolean
    children: React.ReactNode
    hint?: string
    className?: string
}

const FormField = ({ label, htmlFor, required, children, hint, className = "" }: FormFieldProps) => {
    return (
        <div className={`flex flex-col gap-1.5 ${className}`}>
            <label
                htmlFor={htmlFor}
                className="text-sm font-medium text-black"
            >
                {label}
                {required && <span className="ml-0.5 text-danger">*</span>}
            </label>
            {children}
            {hint && <p className="text-xs text-body">{hint}</p>}
        </div>
    )
}

export default FormField
