'use client'

import Image from "next/image";
import {TextEntryField, TextEntryFieldType} from "@/app/components/TextEntryField/TextEntryField";
import React, {useState} from "react";
import {TextEntryFieldLarge} from "@/app/components/TextEntryField/TextEntryFieldLarge";
import {DefaultButton} from "@/app/components/Button/DefaultButton";

export const Info = () => {
    const [name, setName] = useState<string>('John Doe')
    const [location, setLocation] = useState<string>('Saskatoon')
    const [bio, setBio] = useState<string>('Transforming faces with artistry and passion, one brushstroke at a time 🎨🌟')


    return (
      <div className="relative">
          <div className="absolute w-[510px] h-[613px]">

              {/* Profile pic*/}
              <div className="absolute top-[0px] w-full flex justify-center">
                  <Image src="/profile.jpg" width={150} height={150} alt='pic' className="rounded-full"/>
              </div>
              <div className="absolute top-[160px] w-full flex justify-center">
                  <p className="text-16 font-light text-purple mr-3 cursor-pointer">Change</p>
                  <p className="text-16 font-light text-red cursor-pointer">Remove</p>
              </div>
              {/* Profile pic*/}

              {/* Info fields*/}
              <div className="absolute top-[200px] w-full left-[37px]">
                  <p className="absolute top-[0px] font-light text-16">Name</p>
                  <div className="absolute top-[25px]">
                      <TextEntryField inputType={TextEntryFieldType.Text}
                                      fieldLength={TextEntryFieldType.Default}
                                      value={name}
                                      onChange={setName}
                      />
                  </div>

                  <p className="absolute top-[90px] font-light text-16">Location</p>
                  <div className="absolute top-[115px]">
                      <TextEntryField inputType={TextEntryFieldType.Text}
                                      fieldLength={TextEntryFieldType.Default}
                                      value={location}
                                      onChange={setLocation}
                      />
                  </div>

                  <p className="absolute top-[180px] font-light text-16">Bio</p>
                  <div className="absolute top-[205px]">
                      <TextEntryFieldLarge value={bio}
                                           onChange={setBio}
                      />
                  </div>
                  <div className="absolute top-[340px] left-[-37px] w-full flex justify-center">
                      <DefaultButton text={"Save"}/>
                  </div>
              </div>
              {/* Info fields*/}
          </div>
      </div>
    )
}
