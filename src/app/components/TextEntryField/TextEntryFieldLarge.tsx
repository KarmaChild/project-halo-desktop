import React from "react";

export interface TextEntryFieldProps {
    placeholderText?: string
    alert?: boolean
    value?: string
    onChange?: (value: string) => void
}

export const TextEntryFieldLarge: React.FC<TextEntryFieldProps> = ({ placeholderText, alert, value, onChange}) => {
    return (
        <div
            className={`bg-grey absolute flex justify-start items-center rounded-[20px] pl-6 pt-2 text-entry-large-size ${alert ? "border-red-alert" : ""}`}>
            <textarea
                   className="
                 h-[110px] w-full border-none bg-transparent outline-none text-20
                 placeholder-opacity-50 font-[300] resize-none overflow-y-auto"
                   placeholder={placeholderText}
                   value={value}
                   onChange={(e) => onChange?.(e.target.value)}
            />
        </div>
    )
}
