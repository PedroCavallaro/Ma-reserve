import { AlignJustify,User } from 'lucide-react';
import Image from "next/image"
export default function Logged() {
    return(
        <div className="rounded-full border-2 flex p-2 h-10 items-center gap-2">
            <div className='rounded-full'>
                <AlignJustify className='cursor-pointer'/>
            </div>
            <div className='rounded-full cursor-pointer'>
                <User/>
                <Image src={""} alt=''/>
            </div>
        </div>
    )
};
