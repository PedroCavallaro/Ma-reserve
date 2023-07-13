"use client"
import  Link  from 'next/link';
import Logged from './Logged';
import { useEffect, useState } from 'react';
import { User, getUser } from '@/app/lib/auth';
import Cookies from 'js-cookie';


export default function Header() {
    const [userInfo, setUserInfo] = useState<User | null>()

    let token = Cookies.get("token")  
    
    useEffect(()=> {
        if(Cookies.get("token")){
            console.log("oi")
            setUserInfo(getUser())     
         }
    }
    ,[token])

    console.log(userInfo)

    return(
        <header className='flex justify-between py-0 h-[60px] items-center container p-4 mx-auto shadow-lg'>
            <div className='flex gap-2'>
                <a href="/" className='flex items-center gap-1'>
                    <div className='rounded-full w-10 h-10 bg-orange-orangePrimary'></div>
                    <h1 className='text-lg font-sans lg:text-2xl' >Ma <p className='ml-5'>Reserve</p></h1>
                </a>
            </div>
            <div className=''>
                {userInfo  ? <Logged image={userInfo?.image}/> : 
                    <Link href="./Login" className='text-orange-400 underline cursor-pointer text-sm'>Login</Link> }
            </div>
        </header>
    )
}
