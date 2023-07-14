import { ButtonHTMLAttributes, forwardRef } from "react"
import {twMerge} from "tailwind-merge"
type ButtonProps = {
    classes?: string
}
& ButtonHTMLAttributes<HTMLButtonElement >



const Button = ({title, className='', ...props}: ButtonProps) => {
    return(
        <>
            <button
             className={twMerge(`mt-1 text-white text-[12px] bg-orange-orangePrimary rounded-full p-1 hover:bg-orange-500 transition-all
             ${className}`)}
            {...props}
            >
                {title}
            </button>
        </>
    )

}
export default Button