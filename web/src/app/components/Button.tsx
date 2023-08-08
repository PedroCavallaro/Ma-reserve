import { ButtonHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & { text: string };

//eslint-disable-next-line react/display-name
export const Button = ({
    className = "",
    type = "button",
    text = "",
    ...props
}: ButtonProps) => {
    return (
        <>
            <button
                className={twMerge(
                    `text-white bg-orange-400 rounded-md h-10 ${className}`
                )}
                {...props}
                type={type}
            >
                {text}
            </button>
        </>
    );
};
