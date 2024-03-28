import React from "react";

interface LinkProps {
    title: string
    url: string
}

export const Link:React.FC<LinkProps> = ({ title, url}) => {

    const handleClick = () => {
      window.open(url, '_blank')
    }


    return (
        <div className="relative w-[430px] h-[50px] bg-grey rounded-[15px] mb-2.5 cursor-pointer hover-bg-grey" onClick={handleClick}>
            <div className="absolute top-[10px] w-full flex justify-center">
                <p className="text-20 font-regular">{title}</p>
            </div>
        </div>
    )
}
