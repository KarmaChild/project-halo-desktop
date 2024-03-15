'use client'
import React from "react";

export enum TextEntryFieldType {
    Text = 'text',
    Password = 'password',
    Default = 'default',
    Medium = 'medium',
    Long = 'long',
    X_long = 'x-long'
}

export interface TextEntryFieldProps {
    inputType: TextEntryFieldType;
    placeholderText: string;
    fieldLength: TextEntryFieldType;
    value?: string;
    onChange?: (value: string) => void;
}

export const TextEntryField: React.FC<TextEntryFieldProps> = ({ inputType, placeholderText, fieldLength, value, onChange}) => {
    return (
        <div
            className={`bg-grey absolute flex justify-start items-center rounded-[20px] pl-6 ${fieldLength === 'default' ? 'text-entry-default-size' : ''}`}>
            <input type={inputType}
                   className="
                 h-[60px] w-full border-none bg-transparent outline-none text-30
                 placeholder-opacity-50 font-[300]"
                   placeholder="username"
                   onChange={(e) => onChange?.(e.target.value)}
            />
            {/*<div className={`text-entry-field-input-container-${fieldLength}`}>*/}
            {/*    {*/}
            {/*        fieldLength === TextEntryFieldType.X_long ?*/}
            {/*            <textarea*/}
            {/*                placeholder={placeholderText}*/}
            {/*                value={value}*/}
            {/*                onChange={(e) => onChange?.(e.target.value)}*/}
            {/*            /> :*/}
            {/*            <input type={inputType}*/}
            {/*                   placeholder={placeholderText}*/}
            {/*                   value={value}*/}
            {/*                   onChange={(e) => onChange?.(e.target.value)}*/}
            {/*            />*/}
            {/*    }*/}
            {/*</div>*/}
        </div>
    )
}

