"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Logo from "../Logo";
import { Input } from "../Input";
import { Button } from "../Button";
import Link from "next/link";
import { useContext } from "react";
import { AuthContext } from "@/contexts/AuthContext";
import { z } from "zod";
import ErrorSpan from "../ErrorSpan";

const schema = z.object({
    email: z.string().email({ message: "Email deve ser válido" }),
    password: z.string().min(8, { message: "Minimo 8 caractéres" }),
    name: z.string().min(3, "O nome deve ser maior"),
});
type FormData = z.infer<typeof schema>;
export default function RegisterForm() {
    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm<FormData>({
        mode: "onBlur",
        resolver: zodResolver(schema),
    });

    const { registerUser, authState } = useContext(AuthContext);

    return (
        <form
            onSubmit={handleSubmit(async ({ email, name, password }) =>
                registerUser({ email, name, password })
            )}
            className="bg-white flex flex-col gap-4 px-3 w-[20rem] lg:w-[30rem] py-6 rounded-md"
        >
            <Logo />
            <h2 className="text-center">Cadastre-se</h2>
            <div className="flex  flex-col gap-3 px-2">
                <label htmlFor="" className="flex  flex-col">
                    <Input
                        {...register("name")}
                        label="Nome"
                        errors={errors.name?.message}
                        className="shadow-md"
                        placeholder="Nos diga seu nome"
                    />
                </label>
                <label htmlFor="" className="flex  flex-col">
                    <Input
                        {...register("email")}
                        label="Email"
                        errors={errors.email?.message}
                        type="email"
                        className="shadow-md"
                        placeholder="exemplo@email.com"
                    />
                    {authState.error && (
                        <ErrorSpan text="Email já está cadastrado" />
                    )}
                </label>
                <label htmlFor="" className="flex  flex-col">
                    <Input
                        label="Senha"
                        {...register("password")}
                        errors={errors.password?.message}
                        type="password"
                        className="shadow-md"
                        placeholder="minimo 8 caracteres"
                    />
                </label>
                <Button type="submit">
                    <p>Cadastrar</p>
                </Button>
                <Link
                    href={"/Login"}
                    className="text-right text-sm mr-2 text-orange-400"
                >
                    Voltar para o login
                </Link>
            </div>
            <div className="flex flex-col text-sm items-center text-zinc-500">
                <Link href={"/"}>Termos de Uso</Link>
                <Link href={"/"}>Politíca de Privacidade </Link>
            </div>
        </form>
    );
}
