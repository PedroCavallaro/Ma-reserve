import Link from "next/link";
import { Button } from "../Button";
import { Input } from "../Input";
import { LuChefHat } from "react-icons/lu";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Search() {
    const [inputValue, setInputvalue] = useState("");
    const router = useRouter();
    return (
        <section className="flex flex-col justify-center shadow items-center gap-2 h-[12.5rem]">
            <h2 className="flex gap-2 text-lg">
                Encontrar
                <p className="text-orange-400 font-semibold">restaurantes</p>
            </h2>
            <form action="" className="flex flex-col gap-2">
                <label
                    htmlFor=""
                    className="flex relative shadow w-[20rem] h-12 rounded-md p-2 gap-1 items-center"
                >
                    <LuChefHat size={25} color={"#E5881B"} />
                    <Input
                        type="text"
                        placeholder="Restaurante..."
                        className="w-full outline-none"
                        onChange={(e) => setInputvalue(e.currentTarget.value)}
                    />
                </label>
                <Link href={`/Results/query/${inputValue}`}>
                    <Button className="w-full">
                        <p>Procurar</p>
                    </Button>
                </Link>
            </form>
        </section>
    );
}
