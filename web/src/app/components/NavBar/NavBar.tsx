"use client";
import { useEffect, useState } from "react";
import Logo from "../Logo";
import UserSection from "./UserSection";
import MobileMenu from "./MobileMenu";
import { routes } from "@/app/constants/constants";

export default function NavBar() {
    function handleMenu() {
        setIsMenuOpen(!isMenuOpen);
    }
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [validRoute, setValidRoute] = useState(true);

    return (
        <nav className="w-full p-2 h-[70px] shadow-md flex justify-between items-center">
            <Logo />
            <UserSection handleMenu={handleMenu} />
        </nav>
    );
}
