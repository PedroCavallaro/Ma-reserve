"use client"
import { AlignJustify,User } from 'lucide-react';
import { useState } from 'react';
import Image from "next/image"

interface UserInfoProps{
    image?: string
}

export default function Logged(user: UserInfoProps) {
    const [isMenuOpen, setIsMenuOpen ] = useState<boolean>(false)
 
    return(
        <div className="rounded-full shadow-md flex  p-2 h-10 lg:w-[8rem] items-center justify-center lg:justify-evenly gap-3 relative">
            <AlignJustify className='cursor-pointer'  onClick={()=> setIsMenuOpen(!isMenuOpen)}/>
            {isMenuOpen && (
                <div className='absolute top-12 bg-orange-orangePrimary  text-white flex flex-col p-1 mr-2 shadow-xl z-50 '>
                    <a href="" className='cursor-pointer text-[13px] shadow-lg p-1'>Reservas</a>
                    <a href="" className='cursor-pointer text-[13px] p-1'>Logout</a>
                </div>
            )}
           
            {
                    user.image?
                    <Image 
                    src={`${user.image!}`} 
                    height={200} width={200}
                    alt="" referrerPolicy="no-referrer"
                    className='h-7 w-7 lg:h-8 lg:w-8 rounded-full '/> 
                    :  <User size={23}/>
            }
          
            
        </div>
    )
};
