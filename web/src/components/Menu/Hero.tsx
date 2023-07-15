import { RestaurantInfo } from "@/interfaces";
import Image from "next/image"
export default function Hero({name, pictures}: Pick<RestaurantInfo, "name" | "pictures">) {
    return(
        <section className="flex flex-col mt-2 gap-2"> 
            <Image src={`/${pictures[0]}`} alt={name} width={350} className="w-full h-32 object-cover" height={1}/>
            <h1 className="font-sans text-xl text-orange-orangePrimary text-center">{name}</h1>
        </section> 
    )
};
