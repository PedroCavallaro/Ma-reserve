import Link from "next/link";
import { TbChefHatOff } from "react-icons/tb";

export default function NotFound() {
    return (
        <section className="w-full h-[30rem] flex flex-col justify-center items-center gap-2 text-orange-400">
            <TbChefHatOff size={50} />
            <p className="">Nenhum resultado encotrado</p>
            <Link href={"/"} className="underline">
                {"<"} Voltar para a página inicial
            </Link>
        </section>
    );
}
