'use client'

import Image from "next/image";
import React, {useState} from "react";
import {ProfileNavBar} from "@/app/[username]/profileNavbar";

const Profile = () => {
    const params = new URLSearchParams(window.location.search);
    const usernameParam = params.get('username');

    const enum MAIN_AREA {
        GALLERY = 1,
        LINKS = 2,
        SERVICES = 3
    }

    const [selectedNavItem, setSelectedNavItem] = useState(MAIN_AREA.GALLERY)

    const renderMainPage = () => {
        switch (selectedNavItem) {
            case MAIN_AREA.GALLERY:
                console.log('GALLERY')
                return (
                    <div>
                        <p>GALLERY</p>
                    </div>
                )
            case MAIN_AREA.LINKS:
                console.log('LINKS')
                return (
                    <div>
                        <p>LINKS</p>
                    </div>
                )
            case MAIN_AREA.SERVICES:
                console.log('SERVICES')
                return (
                    <div>
                        <p>SERVICES</p>
                    </div>
                )
            default:
                return null
        }
    }


    return (
      <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-[510px] h-[1420px] border-black">

              {/* Profile Header*/}
              <div className="absolute top-[25px] w-full flex justify-center">
                  <div className="absolute top-[0px]">
                      <Image src="/profile.jpg" width={150} height={150} alt='pic' className="rounded-full"/>
                  </div>
                  <div className="absolute top-[155px] w-full flex justify-center">
                      <p className="text-16 text-black-50 font-regular">@johnydogz</p>
                  </div>
                  <div className="absolute top-[180px] w-full flex justify-center">
                      <p className="text-23 font-regular">John Doe</p>
                  </div>
                  <div className="absolute top-[210px] w-full flex justify-center">
                      <Image src="/icons/pin.png"
                             width={22}
                             height={13}
                             alt=""
                             className=""
                      />
                      <p className="text-16 font-light">Saskatoon</p>
                  </div>
                  <div className="absolute top-[240px] w-3/4 flex justify-center">
                      <p className="text-16 font-light text-center">Transforming faces with artistry and passion, one
                          brushstroke at a time 🎨🌟</p>
                  </div>
                  {/* Profile Header*/}

                  {/* Nav bar */}
                  <div className="absolute top-[295px] w-full flex justify-center">
                      <ProfileNavBar index={selectedNavItem} onChange={setSelectedNavItem}/>
                  </div>
                  {/* Nav bar */}

                  {/* Main Area*/}
                  <div className="absolute top-[385px]">
                      {renderMainPage()}
                  </div>
                  {/* Main Area*/}

              </div>

          </div>
      </div>
    )
}

export default Profile
