import React from "react";
import {useRouter} from "next/navigation";

interface UserNameSignUpButtonProps {
    username?: string
}
export const UserNameSignUpButton:React.FC<UserNameSignUpButtonProps> = ({username}) => {

    const router = useRouter()
    const handleClick = () => {
        router.push(`/join?username=${username}`)
    }

    return (
      <div>
          <button className="
          w-40 h-16 rounded-full bg-black text-white
          font-light text-2xl hover:bg-rgba(0, 0, 0, 0.1)
          "
                  onClick={handleClick}
          >Sign Up
          </button>
      </div>
  )
}
