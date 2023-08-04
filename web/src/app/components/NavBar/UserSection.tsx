import { PiUserCircleFill } from "react-icons/pi";
import { AiOutlineMenu } from "react-icons/ai";

interface UserSectionProps {
    handleMenu: () => void;
}

export default function UserSection({ handleMenu }: UserSectionProps) {
    return (
        <div className="flex gap-3 rounded-full shadow-md p-2 mx-2">
            <PiUserCircleFill size={30} />
            <button onClick={() => handleMenu()}>
                <AiOutlineMenu size={30} />
            </button>
        </div>
    );
}
