import { InputHTMLAttributes, forwardRef } from "react";
import { twMerge } from "tailwind-merge";
type InputProps = InputHTMLAttributes<HTMLInputElement>;

// eslint-disable-next-line react/display-name
export const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ name = "", type = "text", className = "", ...props }, ref) => {
        return (
            <>
                <input
                    className={twMerge(` ${className}`)}
                    name={name}
                    type={type}
                    ref={ref}
                    {...props}
                />
            </>
        );
    }
);
