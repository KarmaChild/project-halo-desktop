import React from "react";
import {useRouter} from "next/navigation";

interface DefaultButtonProps {
    text: string
    username?: string
}
export const DefaultButton:React.FC<DefaultButtonProps> = ({text, username}) => {

    const router = useRouter()
    const handleClick = () => {
        router.push(`/join?username=${username}`)
    }

    return (
        <div>
            <button className="
          w-[260px] h-[50px] rounded-full bg-black text-white
          font-light text-2xl hover:bg-rgba(0, 0, 0, 0.1)
          "
                    onClick={handleClick}
            >{text}
            </button>
        </div>
    )
}
