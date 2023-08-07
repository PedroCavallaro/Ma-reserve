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
    const { isAuth } = useContext(AuthContext);
    console.log(isAuth);
    return (
        <nav className="overflow-hidden p-2 h-[70px] shadow-md flex justify-between items-center ">
            <Logo />
            <UserSection handleMenu={handleMenu} />

            <div
                data-menuopen={isMenuOpen}
                className="fixed w-screen top-2 -right-[40rem] data-[menuopen=true]:-right-0 transition-all  px-2 z-50 bg-white h-full"
            >
                <MobileMenu handleMenu={handleMenu} isAuth={isAuth} />
            </div>
        </nav>
    );
}
