import { RestaurantInfo } from "@/interfaces";
import Button from "../Button";
import Image from "next/image"
export default function Hero(RestaurantHero: RestaurantInfo) {
  return(
    <>
        <section className=" flex flex-col gap-2">
            <div className="flex text-orange-orangePrimary gap-2 items-center ">
                <h1 className="text-xl font-sans">{RestaurantHero.name}</h1>
                <Button title="Ver Cardápio"/>
            </div>
            <div className="flex gap-3">
                    <div className="flex flex-col gap-2 h-[100%]">
                        <Image src={`/${RestaurantHero.pictures[0]}`}  alt={RestaurantHero.name} width={200} height={200}  
                        className="bg-black h-20 w-32"/>
                        <Image src={`/${RestaurantHero.pictures[1]}`}  alt={RestaurantHero.name} width={200} height={200} 
                        className="bg-black h-20 w-32"/>
                    </div>
                    <Image src={`/${RestaurantHero.pictures[2]}`}  alt={RestaurantHero.name} width={200} height={200} className="bg-black max-h-screen w-[15rem]"/>
                </div>
            <article >
                <h2 className="text-orange-orangePrimary text-md">Sobre</h2>
                <p className="text-[14px] shadow-md text-left p-1">{RestaurantHero.about.substring(0, 200)}</p>
            </article>
        </section>
    </>
  )  
};
