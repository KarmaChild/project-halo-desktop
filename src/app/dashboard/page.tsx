'use client'
import Image from "next/image"
import {DashBoardNavbar} from "@/app/dashboard/dashboardNavbar"
import React, {useEffect, useState} from "react"
import {Info} from "@/app/dashboard/info/info"
import {Links} from "@/app/dashboard/links/links"
import {Services} from "@/app/dashboard/services/services"
import {getUserData} from "@/api/get-user-data";
import DashBoardLoading from "@/app/dashboard/loading"
import {useSearchParams} from 'next/navigation'
import {Gallery} from "@/app/dashboard/gallery/gallery"

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

const enum MAIN_AREA {
    INFO = 0,
    GALLERY = 1,
    LINKS = 2,
    SERVICES = 3
}

const indexToMainArea = (index: string): MAIN_AREA | null => {
    const indexInt = parseInt(index)

    switch (indexInt){
        case 0:
            return MAIN_AREA.INFO
        case 1:
            return MAIN_AREA.GALLERY
        case 2:
            return MAIN_AREA.LINKS
        case 3:
            return MAIN_AREA.SERVICES
        default:
            return MAIN_AREA.INFO
    }
}

const Dashboard = () => {
    const username = 'johnydogz'
    const [userData, setUserData] = useState<UserData | null>(null)
    const [loading, setLoading] = useState<boolean>(true)

    const searchParams = useSearchParams()
    const index = searchParams.get('index')

    useEffect(() => {
        if (username) {
            getUserData(username)
                .then((response: any) => {
                    const userData = response.userData
                    setUserData(userData)
                })
                .catch(error => {
                    console.error("Error fetching barber information:", error)
                }).finally(() => {
                setLoading(false)
            })
        }
    }, [username])

    const handleYourPageClick = () => {
        const username = 'johnydogz'
        window.open(`/${username}`, '_blank')
    }

    const [selectedNavItem, setSelectedNavItem] = useState(index ? indexToMainArea(index) : MAIN_AREA.INFO)

    const renderMainPage = () => {
        switch (selectedNavItem) {
            case MAIN_AREA.INFO:
                return (
                    <Info username={userData?.username || ""} name={userData?.name || ""} bio={userData?.bio || ""} location={userData?.location || ""}/>
                )
            case MAIN_AREA.GALLERY:
                return (
                    <Gallery username={userData?.username || ""} hidden={userData!.hideGallery}/>
                )
            case MAIN_AREA.LINKS:
                return (
                    <Links username={userData!.username} links={userData!.links} hidden={userData!.hideLinks}/>
                )
            case MAIN_AREA.SERVICES:
                return (
                    <Services username={userData!.username} services={userData!.services} hidden={userData!.hideServices}/>
                )
            default:
                return (
                    <Info username={userData?.username || ""} name={userData?.name || ""} bio={userData?.bio || ""} location={userData?.location || ""}/>
                )
        }
    }

    return (
        <div className="relative">
            {
                loading ? (
                    <DashBoardLoading/>
                ) : (
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-[510px] h-[1420px]">

                        {/* Util bar */}
                        <div
                            className="z-10 bg-black absolute top-[20px] flex justify-center items-center h-[75px] w-[510px] rounded-[20px]"
                        >
                            <div className="flex items-center justify-between">
                                <div
                                    className="bg-white absolute flex justify-center items-center h-[40px] w-[142px] rounded-[10px]
                                             transition duration-300 hover-bg-grey cursor-pointer "
                                    onClick={handleYourPageClick}
                                >
                                    <p className="text-23 font-regular mr-1">Your page</p>
                                    <Image src="/icons/CTA_Arrow.png"
                                           width={13}
                                           height={13}
                                           alt="&#8599"/>
                                </div>
                                <p className="text-white text-23 font-regular relative ml-36
                              cursor-pointer transition duration-300 hover-text-grey"
                                    // onClick={handleLoginClick}
                                >
                                    Logout
                                </p>
                            </div>
                        </div>
                        {/* Util bar */}

                        {/* Nav bar */}
                        <div className="absolute top-[120px] w-full flex justify-center">
                            <DashBoardNavbar index={selectedNavItem || 0} onChange={setSelectedNavItem}/>
                        </div>
                        {/* Nav bar */}

                        {/* Main Area*/}
                        <div className="absolute top-[185px]">
                            {renderMainPage()}
                        </div>
                        {/* Main Area*/}
                    </div>
                )
            }
        </div>
    )
}

export default Dashboard
