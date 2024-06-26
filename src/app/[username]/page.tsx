'use client'
import Image from "next/image"
import React, {useEffect, useState} from "react"
import {ProfileNavBar} from "@/app/[username]/profileNavbar"
import {Links} from "@/app/[username]/links/links"
import {Services} from "@/app/[username]/services/services"
import {getUserData} from "@/api/get-user-data"
import Loading from "@/app/[username]/loading"


interface UserData {
    username: string
    name: string
    bio: string
    hideLinks: boolean
    hideServices: boolean
    hideGallery: boolean
    links: { id:string, title: string, url: string }[]
    services: { id:string, title: string, description: string, price: number }[]
    location: string
}

const Profile = () => {
    const username = 'johnydogz'
    const [userData, setUserData] = useState<UserData | null>(null)
    const [loading, setLoading] = useState<boolean>(true)
    const [pages, setPages] = useState<string[] | null>(null)

    const getPagesList = (hideGallery: boolean, hideLinks: boolean, hideServices: boolean, ) : string[] => {
        let pages = []
        if (!hideGallery) {
            pages.push('Gallery')
        }

        if (!hideLinks) {
            pages.push('Links')
        }

        if (!hideServices) {
            pages.push('Services')
        }
        console.log(pages)
        return pages
    }

    useEffect(() => {
        if (username) {
            getUserData(username)
                .then((response: any) => {
                    const userData = response.userData
                    setUserData(userData)
                    setPages(getPagesList(userData!.hideGallery, userData!.hideLinks, userData!.hideServices))
                })
                .catch(error => {
                    console.error("Error fetching user information:", error)
                }).finally(() => {
                setLoading(false)
            })
        }
    }, [username])

    const enum MAIN_AREA {
        GALLERY = 'Gallery',
        LINKS = 'Links',
        SERVICES = 'Services'
    }

    const [selectedNavItem, setSelectedNavItem] = useState(0)

    const renderMainPage = () => {
        switch (pages![selectedNavItem]) {
            case MAIN_AREA.GALLERY:
                return (
                    <div>
                        <p>GALLERY</p>
                    </div>
                )
            case MAIN_AREA.LINKS:
                return (
                    <Links links={userData!.links}/>
                )
            case MAIN_AREA.SERVICES:
                return (
                    <Services services={userData!.services}/>
                )
            default:
                return null
        }
    }


    return (
        <div className="relative">
            {
                loading ? (
                    <Loading/>
                ) : (
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-[510px] h-[1420px]">

                        {/* Profile Header*/}
                        <div className="absolute top-[25px] w-full flex justify-center">
                            <div className="absolute top-[0px]">
                                <Image src="/profile.jpg" width={150} height={150} alt='pic' className="rounded-full"/>
                            </div>
                            <div className="absolute top-[160px] w-full flex justify-center">
                                <p className="text-16 text-black-50 font-regular ">@{userData?.username}</p>
                            </div>
                            <div className="absolute top-[190px] w-full flex justify-center">
                                <p className="text-23 font-regular">{userData?.name}</p>
                            </div>
                            <div className="absolute top-[225px] w-full flex justify-center">
                                <Image src="/icons/pin.png"
                                       width={22}
                                       height={20}
                                       alt=""
                                       className=""
                                />
                                <p className="text-16 font-light">{userData?.location}</p>
                            </div>
                            <div className="absolute top-[255px] w-3/4 flex justify-center">
                                <p className="text-16 font-light text-center">{userData?.bio}</p>
                            </div>
                            {/* Profile Header*/}

                            {/* Nav bar */}
                            <div className="absolute top-[310px] w-full flex justify-center">
                                <ProfileNavBar index={selectedNavItem} pages={pages!} onChange={setSelectedNavItem}/>
                            </div>
                            {/* Nav bar */}

                            {/* Main Area*/}
                            <div className="absolute top-[370px] left-0">
                                {renderMainPage()}
                            </div>
                            {/* Main Area*/}

                        </div>

                    </div>
                )
            }
        </div>
    )
}

export default Profile
