"use client"
import { Pizza } from 'lucide-react';
import Logged from './Logged';

export default function Header() {

    return(
        
        <header className='flex justify-between items-center container p-4 mx-auto shadow-md'>
            <div className='flex gap-2'>
                <a href="/" className='flex'>
                    <Pizza className='h-10 w-10 mt-2' color='#c27961'/>
                    <h1 className='text-xl font-sans lg:text-2xl' >Ma <p className='ml-5'>Reserve</p></h1>
                </a>
            </div>
            <div className=''>
                {/* <a href="/" className='text-orange-400 underline cursor-pointer text-sm'>Login</a> */}
                <Logged/>
            </div>
        </header>
    )
}
