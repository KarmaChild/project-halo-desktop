'use client'

import Image from "next/image";
import {DashBoardNavbar} from "@/app/dashboard/dashboardNavbar";
import {useState} from "react";
import {Info} from "@/app/dashboard/info";

const Dashboard = () => {
    const enum MAIN_AREA {
        INFO = 1,
        GALLERY = 2,
        LINKS = 3,
        SERVICES = 4
    }

    const [selectedNavItem, setSelectedNavItem] = useState(MAIN_AREA.INFO);

    const renderMainPage = () => {
        switch (selectedNavItem) {
            case MAIN_AREA.INFO:
                console.log('INFO')
                return (
                    <Info/>
                );
            case MAIN_AREA.GALLERY:
                console.log('GALLERY')
                return (
                    <div>
                        <p>GALLERY</p>
                    </div>
                );
            case MAIN_AREA.LINKS:
                console.log('LINKS')
                return (
                    <div>
                        <p>LINKS</p>
                    </div>
                );
            case MAIN_AREA.SERVICES:
                console.log('SERVICES')
                return (
                    <div>
                        <p>SERVICES</p>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-[510px] h-[1420px] border-black">

                {/* Util bar */}
                <div
                    className="z-10 bg-black absolute top-[20px] flex justify-center items-center h-[75px] w-[510px] rounded-[20px]"
                >
                    <div className="flex items-center justify-between">
                        <div
                            className="bg-white absolute flex justify-center items-center h-[40px] w-[142px] rounded-[10px]
                                             transition duration-300 hover-bg-grey cursor-pointer"
                            // onClick={handleJoinClick}
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
                <div className="absolute top-[200px]">
                    {renderMainPage()}
                </div>
                {/* Main Area*/}
            </div>
        </div>
    )
}

export default Dashboard
