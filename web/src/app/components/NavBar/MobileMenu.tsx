import Logo from "../Logo";
import { AiOutlineClose } from "react-icons/ai";
export default function MobileMenu() {
    return (
        <div className="w-full h-full absolute">
            <div className="flex justify-between">
                <Logo />
                <AiOutlineClose />
            </div>
        </div>
    );
}
