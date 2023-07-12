"use client"
import Logged from './Logged';

export default function Header() {

    return(
        
        <header className='flex justify-between py-0 h-[60px] items-center container p-4 mx-auto shadow-lg'>
            <div className='flex gap-2'>
                <a href="/" className='flex items-center gap-1'>
                    <div className='rounded-full w-10 h-10 bg-orange-orangePrimary'></div>
                    <h1 className='text-lg font-sans lg:text-2xl' >Ma <p className='ml-5'>Reserve</p></h1>
                </a>
            </div>
            <div className=''>
                {/* <a href="/" className='text-orange-400 underline cursor-pointer text-sm'>Login</a> */}
                <Logged/>
            </div>
        </header>
    )
}
