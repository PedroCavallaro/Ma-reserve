"use client"
import { Input } from "../Input";
import Logo from "../Logo";
import {z} from "zod"
import {useForm} from "react-hook-form"
import {zodResolver} from "@hookform/resolvers/zod"
import Link from "next/link"
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";

const schema = z.object({
    username: z.string({
        invalid_type_error: "Somente letras no nome de usuário"
    }).min(3, {
        message: "Minimo 3 caractéres"
    }),
    password: z.string().min(8, {
        message: "Minimo 8 caractéres"
    })
})
// invalid_type_error: "Somente letras no nome de usuário"

type FormData = z.infer<typeof schema>


export default function LoginForm() {
    console.log(process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID)
    const {
        register,
        handleSubmit,
        formState: {errors}

    } = useForm<FormData>({
        mode: "onBlur",
        resolver: zodResolver(schema)
    })

    return (
        <form className="p-1 min-w-[217px] min-h-[450px] flex flex-col gap-2 relative bg-white lg:h-[500px]  lg:min-w-[434px]">
            <div className="p-2">
                <Logo href=""/>
            </div>
            <div className="flex flex-col justify-center items-center gap-2 lg:gap-3">
            <h1 className="text-center text-lg lg:text-xl">Faça seu login</h1>
                <label htmlFor=""
                className="flex flex-col gap-1 w-[80%]"
                >
                    <p className="text-orange-orangePrimary text-sm">Usuário</p>
                    <Input type="text" 
                    {...register("username")}
                    placeholder="Nome de usuário" 
                    className=" border-orange-orangePrimary border-2 rounded-md p-1 text-sm lg:text-base outline-none"/>
                    {errors.username &&
                         (<span className="text-red-500 text-sm">{errors.username.message}</span>)
                     
                    }
                </label>
                
                <label htmlFor=""
                    className="flex flex-col gap-1 w-[80%]"
                >
                    <p className="text-orange-orangePrimary text-sm">Senha</p>
                    <Input type="password" 
                    {...register("password")}
                    placeholder="Digite sua senha"
                    className=" border-orange-orangePrimary border-2 rounded-md p-1 text-sm lg:text-base outline-none"/>
                    {
                    errors.password && 
                            (<span className="text-red-500 text-sm">{errors.password?.message}</span>)
                    }
                    <p className="text-sm">Não tem uma conta?
                        <Link href="/Register"className="text-orange-orangePrimary hover:text-orange-400 cursor-pointer"> Cadastre-se</Link>
                    </p>
                </label>
                
                <Input type="submit" value="Entrar" className="bg-orange-orangePrimary w-[80%] text-white p-1 cursor-pointer rounded-md hover:bg-orange-400 transition-all"/>
                <p>ou</p>
                <div className="w-[70%] flex items-center justify-center">
                <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!}>
                        <GoogleLogin 
                        size={"medium"}
                        auto_select
                        onSuccess={(cred)=>console.log(cred)}/>
                </GoogleOAuthProvider>
                    </div>

            </div>

        </form>
    )
};
