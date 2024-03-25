'use client'
import Image from "next/image"
import React, {useState} from "react"

// interface AddLinkForm {
//     title: string
//     URL: string
//     open: boolean
// }

export const AddLinkForm = () => {
    const [title, setTitle] = useState<string>('')
    const [URL, setURL] = useState<string>('')

    return (
      <div className="w-[430px] h-[200px] bg-grey rounded-[15px]">
          <div className="absolute top-[10px] left-[425px]">
              <Image src="/icons/x.png" alt="X" width={25} height={25} className="cursor-pointer"/>
          </div>
          <div className="absolute top-[15px] left-[95px] border-2 border-amber-300">
              <div className="absolute top-0">
                  <p className="text-16 font-extralight">Title</p>
                  <input className="w-[315px] h-[40px] rounded-[15px] left-0 font-light pl-2"
                         placeholder="e.g. Check out my Instagram"
                         value={title}
                         onChange={() => setTitle}
                  />
              </div>
              <div className="absolute top-[65px]">
                  <p className="text-16 font-extralight">URL</p>
                  <input className="w-[315px] h-[40px] rounded-[15px] font-light pl-2"
                         placeholder="e.g. https://www.instagram.com/tall.cody"
                         value={URL}
                         onChange={() => setURL}
                  />
              </div>
              <div className="absolute flex top-[140px] left-[85px]">
                  <button className="w-[145px] h-[35px] bg-black rounded-[50px] text-white font-regular text-16">Save</button>
              </div>
          </div>
      </div>
  )
}