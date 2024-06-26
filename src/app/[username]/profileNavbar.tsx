'use client'

import React, {useState} from "react"

export interface ProfileNavBarProps {
    index: number
    pages: string[]
    onChange?: (index: number) => void
}

export const ProfileNavBar:React.FC<ProfileNavBarProps> = ({index, pages, onChange}) => {
    const [selectedButton, setSelectedButton] = useState(index)
    const handleButtonClick = (index: any) => {
        setSelectedButton(index)
        onChange && onChange(index)
    }

    return (
        <div className="w-[330px] h-[30px]">
            {/* Row of buttons */}
            <div className="flex">
                {pages.map((label, index) => (
                    <p
                        key={index}
                        className={`flex-1 p-[1px] text-center cursor-pointer text-24 font-regular`}
                        onClick={() => handleButtonClick(index)}
                    >
                        {label}
                    </p>
                ))}
            </div>
            {/* Line indicating the selected button */}
            <div
                className="h-[3px] bg-black transition-all duration-300"
                style={{
                    width: `${100 / pages.length}%`,
                    marginLeft: `${(selectedButton) * (100 / pages.length)}%`,
                }}
            />
        </div>
    )
}
