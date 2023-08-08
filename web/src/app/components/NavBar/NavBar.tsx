"use client";
import { useContext, useEffect, useState } from "react";
import Logo from "../Logo";
import UserSection from "./UserSection";
import MobileMenu from "./MobileMenu";
import { AuthContext } from "@/app/contexts/AuthContext";

export default function NavBar() {
    function handleMenu() {
        setIsMenuOpen(!isMenuOpen);
    }
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { isAuth, logOut } = useContext(AuthContext);

    return (
        <nav className="overflow-hidden p-2 h-[70px] shadow-md flex justify-between items-center ">
            <Logo handleMenu={handleMenu} />
            <UserSection handleMenu={handleMenu} isAuth={isAuth} />

            <div
                data-menuopen={isMenuOpen}
                className="fixed flex flex-col gap-6 w-screen top-2 -right-[40rem] data-[menuopen=true]:-right-0 transition-all  px-2 z-50 bg-white h-full"
            >
                <MobileMenu
                    handleMenu={handleMenu}
                    isAuth={isAuth}
                    logOut={logOut}
                />
            </div>
        </nav>
    );
}
