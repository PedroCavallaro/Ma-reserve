import { RestaurantInfo } from "@/interfaces";
import Button from "../Button";
import { ReactNode } from "react";
import { CheckCircle, ChefHat } from "lucide-react";
import { HighLights } from "./HighLights";


interface RestaurantHeroProps extends RestaurantInfo{
    children: ReactNode
}


export default function Hero(RestaurantHero: RestaurantHeroProps) {
  return(
    <>
        <section className="p-3 flex flex-col gap-2">
            <div className="flex text-orange-orangePrimary gap-2 items-center ">
                <h1 className="text-xl font-sans">{RestaurantHero.name}</h1>
                <Button title="Ver Cardápio"/>
            </div>
            <div className="flex gap-2">
                <div className="flex flex-col gap-5">
                    <div className="bg-black h-14 w-28"></div>
                    <div className="bg-black h-14 w-28"></div>
                </div>
                <div className="bg-black max-h-screen w-[15rem]"></div>
            </div>
            <article >
                <h2 className="text-orange-orangePrimary text-md">Sobre</h2>
                <p className="text-[14px] shadow-lg text-left p-1">{RestaurantHero.about.substring(0, 200)}</p>
            </article>
     
            <section className="flex gap-5">
                <div className="flex w-[35%] flex-col gap-2">
                    <h2 className="text-orange-orangePrimary">Especialidade</h2>
                    <div className="shadow flex items-center gap-2 p-2 min-h-[20px] ">
                        <ChefHat size={10} color="#fff" className="bg-orange-orangePrimary rounded-full p-1 h-7 w-7"/> 
                        <p>{RestaurantHero.FoodType.description}</p>
                    </div>

                <HighLights highlights={RestaurantHero.highlights} />
                </div>
            {/* Reservation form */}
            {RestaurantHero.children}
            </section>
        </section>
    </>
  )  
};
