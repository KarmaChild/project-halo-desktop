import {NavbarJoinButton} from "@/app/components/navbar/NavbarJoinButton"

export const Navbar = () => {
    return (
        <div className="bg-black absolute top-10 flex justify-center items-center h-[75px] w-[510px] rounded-[20px]">
            <div className="flex items-center justify-between">
                <NavbarJoinButton/>
                <p className="text-white text-23 font-regular relative ml-36 z-10">Login</p>
            </div>
        </div>
    )
}
