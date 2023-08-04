"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Logo from "../Logo";
import { Input } from "../Input";
import { Button } from "../Button";
import Link from "next/link";

export default function LoginForm() {
    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm({
        mode: "onBlur",
    });
    return (
        <form className="bg-white flex flex-col gap-4 px-3 w-[20rem] lg:w-[30rem] py-6 rounded-md">
            <Logo />
            <h2 className="text-center">Faça seu login</h2>
            <div className="flex  flex-col gap-3 px-2">
                <label htmlFor="" className="flex  flex-col">
                    <Input
                        label="Email"
                        className="shadow-md"
                        placeholder="exemplo@email.com"
                    />
                </label>
                <label htmlFor="" className="flex  flex-col">
                    <Input
                        label="Senha"
                        type="password"
                        className="shadow-md"
                        placeholder="minimo 8 caracteres"
                    />
                </label>
                <Button text="Entrar" type="submit" />
                <Link href={"/"} className="text-right text-sm mr-2 ">
                    Esqueceu sua senha?
                </Link>
                <p className="text-orange-400 text-center ">Continuar com</p>
                <div className="flex items-center gap-3 justify-center">
                    <div className="rounded-full w-12 h-12 bg-gray-600"></div>
                    <div className="rounded-full w-12 h-12 bg-gray-600"></div>
                </div>
                <p className="text-orange-400 text-center">
                    Não tem uma conta?
                </p>
                <Button text="Cadastre-se" type="button" />
            </div>
        </form>
    );
}
