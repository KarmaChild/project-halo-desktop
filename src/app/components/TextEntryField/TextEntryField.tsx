'use client'
import React from "react"

export enum TextEntryFieldType {
    Text = 'text',
    Password = 'password',
    Default = 'default',
    Medium = 'medium',
    Long = 'long',
    X_long = 'x-long'
}

export interface TextEntryFieldProps {
    inputType: TextEntryFieldType
    fieldLength: TextEntryFieldType
    placeholderText?: string
    alert?: boolean
    value?: string
    onChange?: (value: string) => void
    disabled?: boolean
}

export const TextEntryField: React.FC<TextEntryFieldProps> = ({ inputType, placeholderText, fieldLength, alert, value, onChange, disabled}) => {
    return (
        <div
            className={`bg-grey absolute flex justify-start items-center rounded-[20px] pl-6 ${fieldLength === 'default' ? 'text-entry-default-size' : ''} ${alert ? "border-red-alert" : ""}`}>
            <input type={inputType}
                   className={`h-[60px] w-full border-none bg-transparent outline-none text-25
                                placeholder-opacity-50 font-[300] ${disabled ? "text-gray-400 cursor-not-allowed" : ""}`}
                   placeholder={placeholderText}
                   value={value}
                   onChange={(e) => onChange?.(e.target.value)}
                   disabled={disabled}
            />
        </div>
    )
}

