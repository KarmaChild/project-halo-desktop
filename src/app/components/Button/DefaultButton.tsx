import React from "react";

interface DefaultButtonProps {
    text: string
    username?: string
    onClick?: () => void;
    disabled?: boolean
}
export const DefaultButton:React.FC<DefaultButtonProps> = ({text, onClick, disabled}) => {

    return (
        <div>
            <button className={`w-[260px] h-[50px] rounded-full ${disabled ? "disable-button" : "bg-black"} text-white
          font-light text-2xl`}
                    onClick={onClick}
            >{text}
            </button>
        </div>
    )
}
