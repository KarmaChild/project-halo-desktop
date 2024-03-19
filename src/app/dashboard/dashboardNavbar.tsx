'use client'

import React, {useState} from "react"

export interface DashBoardNavbarProps {
    index: number
    onChange?: (index: number) => void
}

export const DashBoardNavbar:React.FC<DashBoardNavbarProps> = ({index, onChange}) => {
    const [selectedButton, setSelectedButton] = useState(index)
    const handleButtonClick = (index: any) => {
        setSelectedButton(index)
        onChange && onChange(index)
    }

    return (
      <div className="w-[330px] h-[30px]">
          {/* Row of buttons */}
          <div className="flex">
              {['Info', 'Gallery', 'Links', 'Services'].map((label, index) => (
                  <p
                      key={index}
                      className={`flex-1 p-[1px] text-center cursor-pointer text-24 font-regular`}
                      onClick={() => handleButtonClick(index+1)}
                  >
                     {label}
                  </p>
              ))}
          </div>
          {/* Line indicating the selected button */}
          <div
              className="h-[3px] bg-black transition-all duration-300"
              style={{
                  width: `${100 / 4}%`, // Adjusted for four buttons
                  marginLeft: `${(selectedButton - 1) * (100 / 4)}%`, // Adjusted for four buttons
              }}
          />
      </div>
  )
}
