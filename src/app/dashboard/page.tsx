'use client'

import Image from "next/image"
import {DashBoardNavbar} from "@/app/dashboard/dashboardNavbar"
import React, {useEffect, useState} from "react"
import {Info} from "@/app/dashboard/info/info"
import {Links} from "@/app/dashboard/links/links"
import {Services} from "@/app/dashboard/services/services"
import {getUserData} from "@/api/get-user-data";
import Loading from "@/app/[username]/loading";

interface UserData {
    username: string
    name: string
    bio: string
    links: { title: string, url: string }[]
    services: { serviceName: string, description: string, price: number }[]
    location: string
}

const Dashboard = () => {
    const username = 'johnydogz'
    const [userData, setUserData] = useState<UserData | null>(null)
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        if (username) {
            getUserData(username)
                .then((response: any) => {
                    const userData = response.userData
                    setUserData(userData)
                    console.log(userData)
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

    const enum MAIN_AREA {
        INFO = 1,
        GALLERY = 2,
        LINKS = 3,
        SERVICES = 4
    }

    const [selectedNavItem, setSelectedNavItem] = useState(MAIN_AREA.INFO)

    const renderMainPage = () => {
        switch (selectedNavItem) {
            case MAIN_AREA.INFO:
                return (
                    <Info username={userData?.username || ""} name={userData?.name || ""} bio={userData?.bio || ""} location={userData?.location || ""}/>
                )
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

                        {/* Util bar */}
                        <div
                            className="z-10 bg-black absolute top-[20px] flex justify-center items-center h-[75px] w-[510px] rounded-[20px]"
                        >
                            <div className="flex items-center justify-between">
                                <div
                                    className="bg-white absolute flex justify-center items-center h-[40px] w-[142px] rounded-[10px]
                                             transition duration-300 hover-bg-grey cursor-pointer"
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
                            <DashBoardNavbar index={selectedNavItem} onChange={setSelectedNavItem}/>
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
