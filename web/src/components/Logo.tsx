import Link from "next/link"

interface LogoProps{
    href: string
}
export default function Logo({href}:LogoProps) {
    return(
        <div className='flex gap-2'>
            <Link href={`${href}`} className='flex items-center gap-1'>
                <div className='rounded-full w-10 h-10 bg-orange-orangePrimary'></div>
                <h1 className='text-md font-sans lg:text-xl' >Ma <p className='ml-5'>Reserve</p></h1>
            </Link>
        </div>
    )
};
