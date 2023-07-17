import { RestaurantInfo } from "@/interfaces";
import { ChevronLeft } from "lucide-react";
import Image from "next/image"
import Link from "next/link";
export default function Hero({name, pictures}: Pick<RestaurantInfo, "name" | "pictures">) {
    return(
        <section className="flex flex-col gap-3 container mx-auto"> 
            <div>
                <Link href="../RestaurantPage" className="text-sm flex items-center text-orange-orangePrimary ">
                    <ChevronLeft />
                    Voltar para reserva</Link>
                <Image src={`/${pictures[0]}`} alt={name} width={350} className="w-full h-32 object-cover" height={1}/>
            </div>
            <h1 className="font-sans text-2xl text-orange-orangePrimary text-center">{name}</h1>
        </section> 
    )
};
