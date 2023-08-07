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
    return (
        <nav className="md:w-full lg:w-full  overflow-hidden p-2 h-[70px] shadow-md flex justify-between items-center ">
            <Logo />
            <UserSection handleMenu={handleMenu} />
            {isMenuOpen && (
                <div className="absolute w-full top-2 px-3 z-50 bg-white h-full">
                    <MobileMenu handleMenu={handleMenu} isAuth={isAuth} />
                </div>
            )}
        </nav>
    );
}
