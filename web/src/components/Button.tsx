import { ButtonHTMLAttributes, ReactNode } from "react";
import { text } from "stream/consumers";
import { twMerge } from "tailwind-merge";
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    children: ReactNode;
};

//eslint-disable-next-line react/display-name
export const Button = ({
    className = "",
    type = "button",
    children = <p></p>,
    ...props
}: ButtonProps) => {
    return (
        <>
            <button
                className={twMerge(
                    `text-white bg-orange-400 rounded-md px-2 h-10 ${className}`
                )}
                {...props}
                type={type}
            >
                {children}
            </button>
        </>
    );
};
