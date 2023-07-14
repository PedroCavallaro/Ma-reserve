import { ButtonHTMLAttributes, forwardRef } from "react"

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {}
const Button = ({title, ...props}: ButtonProps) => {
    return(
        <>
            <button
             className="mt-1 text-white text-[12px] bg-orange-orangePrimary rounded-full p-1 hover:bg-orange-500 transition-all"
            {...props}
            >
                {title}
            </button>
        </>
    )

}
export default Button