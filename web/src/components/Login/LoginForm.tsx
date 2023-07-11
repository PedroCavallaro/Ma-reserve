"use client"
import { Input } from "../Input";
import Logo from "../Logo";
import {z} from "zod"
import {useForm} from "react-hook-form"
import zodResolver from "@hookform/resolvers"

const schema = z.object({

})

export default function LoginForm() {
    const {
        register,
        reset
    
    } = useForm()

    return (
        <form className="h-[435px] w-[217px] flex flex-col gap-2 bg-white lg:h-[500px]  lg:w-[434px]">
            <div className="p-2">
                <Logo/>
            </div>
            <div className="flex flex-col justify-center items-center gap-2 lg:gap-4 ">
            <h1 className="text-center text-xl">Faça seu login</h1>
                <label htmlFor=""
                className="flex flex-col gap-1 w-[70%]"
                >
                <p className="text-orange-orangePrimary text-sm">Usuário</p>
                <Input type="text" 
                {...register("username")}
                placeholder="Nome de usuário" 
                className=" border-orange-orangePrimary border-2 rounded-md p-1 text-sm lg:text-base"/>
                </label>
                
                <label htmlFor=""
                    className="flex flex-col gap-1 w-[70%]"
                >
                <p className="text-orange-orangePrimary text-sm">Senha</p>
                <Input type="Password" 
                placeholder="Digite sua senha" 
                className=" border-orange-orangePrimary border-2 rounded-md p-1 text-sm lg:text-base"/>
                <p className="text-sm">Não tem uma conta?<a className="text-orange-orangePrimary hover:text-orange-400 cursor-pointer"> Cadastre-se</a></p>
                </label>
                
                <Input type="submit" value="Entrar" className="bg-orange-orangePrimary w-[70%] text-white p-1 cursor-pointer rounded-md hover:bg-orange-400 transition-all"/>
                <p>ou</p>

            <Input type="submit" value="Entrar" className="bg-orange-orangePrimary w-[70%] text-white p-1 cursor-pointer rounded-md hover:bg-orange-400 transition-all"/>
            <Input type="submit" value="Entrar" className="bg-orange-orangePrimary w-[70%] text-white p-1 cursor-pointer rounded-md hover:bg-orange-400 transition-all"/>

            </div>

        </form>
    )
};
