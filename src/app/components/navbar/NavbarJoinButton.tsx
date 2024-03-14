'use client'
import Image from 'next/image';
import { useRouter } from 'next/router';

export const NavbarJoinButton = () => {
    const router = useRouter();

    const handleClick = () => {
        router.push('/join'); // Use push for client-side navigation
    };



    return (
      <div className="
      bg-white absolute flex justify-center items-center h-[40px] w-[140px] rounded-[10px]
      transition duration-300 hover-bg-grey cursor-pointer
      "
      >
          <p className="text-23 font-regular mr-1">Join</p>
          <Image src="/icons/CTA_Arrow.png"
                 width={13}
                 height={13}
                 alt="&#8599;"/>
      </div>
  )
}
