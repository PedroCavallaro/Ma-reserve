"use client"
import { AlignJustify,User } from 'lucide-react';
import Image from "next/image"
import { useState } from 'react';
export default function Logged() {
    const[isMenuOpen, setIsMenuOpen ] = useState<boolean>(false)

    return(
        <div className="rounded-full shadow-md flex p-1 h-10 items-center justify-center gap-3 relative">
            <AlignJustify className='cursor-pointer' size={23} onClick={()=> setIsMenuOpen(!isMenuOpen)}/>
            {isMenuOpen && (
                <div className='absolute top-12 bg-orange-500 flex flex-col p-1 mr-2 shadow-xl'>
                    <a href="" className='cursor-pointer text-sm'>Reservas</a>
                    <a href="" className='cursor-pointer text-sm'>Logout</a>
                </div>
            )}
            <User size={23}/>
            {/* <Image src={""} alt=''/> */}
        </div>
    )
};
