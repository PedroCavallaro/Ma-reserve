import Link from "next/link";
import Logo from "../Logo";
import { AiOutlineClose } from "react-icons/ai";
import { routes } from "@/app/constants/constants";
import { useState, useEffect } from "react";

interface MobileMenuProps {
    isAuth: boolean;
    handleMenu: () => void;
    logOut: () => void;
}

export default function MobileMenu({
    handleMenu,
    isAuth,
    logOut,
}: MobileMenuProps) {
    return (
        <>
            <div className="flex items-center justify-between z-20">
                <Logo handleMenu={handleMenu} />
                <button onClick={() => handleMenu()}>
                    <AiOutlineClose />
                </button>
            </div>
            <div className="flex items-center justify-center flex-col text-lg">
                {isAuth ? (
                    <>
                        <Link onClick={() => handleMenu()} href={"/Login"}>
                            Minha conta
                        </Link>
                        <Link onClick={() => handleMenu()} href={"/Login"}>
                            Minhas Reservas
                        </Link>
                        <Link onClick={() => handleMenu()} href={"/Login"}>
                            Itens salvos
                        </Link>
                        <Link
                            onClick={() => {
                                logOut();
                                handleMenu();
                            }}
                            href={"/Login"}
                            className="text-red-500"
                        >
                            Sair
                        </Link>
                    </>
                ) : (
                    <>
                        <Link onClick={() => handleMenu()} href={routes.LOGIN}>
                            Fazer Login
                        </Link>
                        <Link
                            onClick={() => handleMenu()}
                            href={routes.REGISTER}
                        >
                            Cadastre-se
                        </Link>
                        <Link onClick={() => handleMenu()} href={"/"}>
                            Para colaboradores
                        </Link>
                    </>
                )}
            </div>
        </>
    );
}
