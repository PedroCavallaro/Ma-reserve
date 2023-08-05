import { InputHTMLAttributes, forwardRef } from "react";
import { twMerge } from "tailwind-merge";
type InputProps = InputHTMLAttributes<HTMLInputElement> & {
    label?: string;
    errors?: string;
};

// eslint-disable-next-line react/display-name
export const Input = forwardRef<HTMLInputElement, InputProps>(
    (
        { name = "", type = "text", className = "", label, errors, ...props },
        ref
    ) => {
        return (
            <>
                {label && <p className="text-orange-400 text-sm">{label}</p>}
                <input
                    className={twMerge(
                        `rounded-md h-10 p-1 outline-none ${className}`
                    )}
                    name={name}
                    type={type}
                    ref={ref}
                    {...props}
                />
                {errors && <p className="text-red-500 text-sm">{errors}</p>}
            </>
        );
    }
);
