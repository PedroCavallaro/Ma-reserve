import Link from "next/link";
import Logo from "../Logo";
import { AiOutlineClose } from "react-icons/ai";
import { routes } from "@/app/constants/constants";

interface MobileMenuProps {
    isAuth: boolean;
    handleMenu: () => void;
}

export default function MobileMenu({ handleMenu, isAuth }: MobileMenuProps) {
    return (
        <>
            <div className="flex items-center justify-between z-20">
                <Logo />
                <button>
                    <AiOutlineClose />
                </button>
            </div>
            <div className="flex items-center justify-center flex-col mt-4">
                {isAuth ? (
                    <>
                        <Link href={"/Login"}>Fazer Login</Link>
                        <Link href={"/Register"}>Cadastre-se</Link>
                        <Link href={"/"}>Para colaboradores</Link>
                    </>
                ) : (
                    <>
                        <Link href={"/Login"}>Fazer Login</Link>
                        <Link href={"/Login"}>Fazer Login</Link>
                        <Link href={"/Login"}>Fazer Login</Link>
                    </>
                )}
            </div>
        </>
    );
}
