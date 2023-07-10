import { InputHTMLAttributes, forwardRef } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement>

export const Input= forwardRef<HTMLInputElement, InputProps>(({name="", type="text", ...props }, ref) => {
    return(
        <>
        <input 
        type={type}
        ref={ref}
        name={name}
        {...props}
        />
        </>
    )
})