import React from "react"
import {Link} from "@/app/[username]/links/link";


export const Links = () => {

    return (
        <div className="relative">
            <div className="absolute w-[510px] h-[613px]">

                {/* Links*/}
                <div className="absolute w-full flex flex-col items-center justify-center">
                    <Link title={"Book an appointment!"} url={"https://www.instagram.com/tall.cody"}/>
                    <Link title={"My Facebook"} url={"https://www.instagram.com/tall.cody"}/>
                    <Link title={"My Instagram"} url={"https://www.instagram.com/tall.cody"}/>
                </div>
                {/* Links*/}

            </div>
        </div>
    )
}
