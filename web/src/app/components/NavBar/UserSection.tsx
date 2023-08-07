import { PiUserCircleFill } from "react-icons/pi";
import { AiOutlineMenu } from "react-icons/ai";
import Image from "next/image";
import { getUser } from "@/app/services/auth";
import image from "next/image";
interface UserSectionProps {
    handleMenu: () => void;
    isAuth: boolean;
}

export default function UserSection({ handleMenu, isAuth }: UserSectionProps) {
    return (
        <div className="flex gap-3 rounded-full shadow-md p-2 mx-2">
            <PiUserCircleFill size={30} />
            <button onClick={() => handleMenu()}>
                <AiOutlineMenu size={30} />
            </button>
        </div>
    );
}
