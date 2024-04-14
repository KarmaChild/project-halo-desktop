'use client'
import {UserNameTextEntry} from "@/app/components/UserNameTextEntry/UserNameTextEntry"
import {UserNameSignUpButton} from "@/app/components/UserNameTextEntry/UserNameSignUpButton"
import {useState} from "react"
import Image from "next/image"

export default function Home() {
    const [username, setUsername] = useState<string>('')

    const handleJoinClick = () => {
        window.open(`/join?username=${username}`, '_blank')
    }

    const handleLoginClick = () => {
        window.open(`/login`, '_blank')
    }

    return (
        <main className="flex flex-col items-center justify-center mx-auto">
            <div className="flex justify-center">
                {/* Navbar */}
                <div
                    className="z-10 bg-black absolute top-10 flex justify-center items-center h-[75px] w-[510px] rounded-[20px]"
                >

                    <div className="flex items-center justify-between ">
                        <div
                            className="bg-white absolute flex justify-center items-center h-[40px] w-[140px] rounded-[10px]
                                         transition duration-300 hover-bg-grey cursor-pointer"
                            onClick={handleJoinClick}
                        >
                            <p className="text-23 font-regular mr-1">Join</p>
                            <Image src="/icons/CTA_Arrow.png"
                                   width={13}
                                   height={13}
                                   alt="&#8599"/>
                        </div>
                        <p className="text-white text-23 font-regular relative ml-36
                          cursor-pointer transition duration-300 hover-text-grey"
                           onClick={handleLoginClick}
                        >
                            Login
                        </p>
                    </div>
                </div>
                {/* Navbar */}
            </div>

            {/* first page */}
            <div className="relative w-[1280px] h-screen min-h-[830px]">
                <div className="absolute top-[200px] left-10 leading-tight">
                    <p className="font-bold text-64">
                        One Link<br/>
                        One Mini Website<br/>
                        All of You
                    </p>
                </div>
                <div className="absolute top-[500px] left-10 w-[785px] leading-tight">
                    <p className="font-light text-30">
                        Your platform for showcasing your finest work, sharing services
                        info, and connecting with your customers across all socials. Claim
                        your username now.
                    </p>
                </div>
                <div className="absolute top-[650px] left-10">
                    <UserNameTextEntry username={username} onChange={setUsername}/>
                    <div className="ml-[380px]">
                        <UserNameSignUpButton username={username}/>
                    </div>
                </div>
                <div className="bg-grey h-[584px] w-[300px] absolute top-[200px] left-[885px] rounded-[30px]"/>
            </div>
            {/* first page */}

            {/* second page */}
            <div className="relative flex col justify-center items-center w-screen h-screen min-h-[1000px] mt-4 bg-black">
                <div className="absolute top-[50px] left-0 right-0">
                    <div className="text-center w-[1090px] h-[137px] m-auto leading-tight">
                        <p className="text-white font-bold text-64">
                            Lead generation for ✨beauty✨ professionals, oversimplified
                        </p>
                    </div>
                </div>
                <div className="flex flex-row absolute top-[200px]">
                    <div className="relative top-[50px]">
                        <div className="text-center w-[260px] h-[80px] leading-tight">
                            <p className="text-white font-regular text-30">
                                Create your own mini website
                            </p>
                        </div>
                        <div className="bg-grey h-[500px] w-[250px] rounded-[30px]">
                        </div>
                    </div>
                    <div className="relative top-[50px] ml-12">
                        <div className="text-center w-[260px] h-[80px] leading-tight">
                            <p className="text-white font-regular text-30">
                                Easy access to your best work
                            </p>
                        </div>
                        <div className="bg-grey h-[500px] w-[250px] rounded-[30px]">
                        </div>
                    </div>
                    <div className="relative top-[50px] ml-12">
                        <div className="text-center w-[260px] h-[80px] leading-tight">
                            <p className="text-white font-regular text-30">
                                All your links in one place
                            </p>
                        </div>
                        <div className="bg-grey h-[500px] w-[250px] rounded-[30px]">
                        </div>
                    </div>
                    <div className="relative top-[50px] ml-12">
                        <div className="text-center w-[260px] h-[80px] leading-tight">
                            <p className="text-white font-regular text-30">
                                Powered by community reviews
                            </p>
                        </div>
                        <div className="bg-grey h-[500px] w-[250px] rounded-[30px]">
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
