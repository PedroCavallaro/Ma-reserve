"use client"
import { Pizza } from 'lucide-react';
import {signIn, useSession} from "next-auth/react"


export default function Header() {
    // const {status, data} = useSession()
    // const handleLogin = signIn()

    return(
        <header className='flex justify-between container p-4  mx-auto shadow-md'>
            <div className='flex gap-2'>
                <Pizza className='h-10 w-10' color='#c27961'/>
                <h1 className='text-xl font-sans lg:text-2xl' >Ma Reserve</h1>
            </div>
            <div className=''>
                <a href="/" className='text-orange-400 underline cursor-pointer'>Login</a>
                {/* {status === "unauthenticated" && (

                )
                } */}
            </div>
        </header>
    )
}
