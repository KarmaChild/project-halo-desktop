'use client'

import React from "react";

interface UserNameTextEntryProps {
    onChange?: (value: string) => void;
}
export const UserNameTextEntry:React.FC<UserNameTextEntryProps> = ({ onChange }) => {
  return (
      <div className="bg-grey absolute flex justify-start items-center h-[70px] w-[360px] rounded-[20px] pl-6">
          <p className="font-light text-30 ml-0 ">appna.me/</p>
          <input type="text"
                 className="
                 h-[60px] w-[200px] border-none bg-transparent outline-none text-30
                 placeholder-opacity-50 font-[300]"
                 placeholder="username"
                 onChange={(e) => onChange?.(e.target.value)}
          />
      </div>
  )
}
