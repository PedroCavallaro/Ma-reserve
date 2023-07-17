import { RestaurantInfo } from "@/interfaces";
import { CheckCircle, ChefHat } from "lucide-react";

export function HighLights({highlights, Gastronomy}: Pick<RestaurantInfo, "highlights" | "Gastronomy">) {
    return(
        <article className="flex flex-col gap-2 w-[45%]">
            <h2 className="text-orange-orangePrimary">Gastronomia</h2>
            <div className="shadow flex items-center gap-2 p-2 min-h-[20px] ">
                <ChefHat size={10} color="#fff" className="bg-orange-orangePrimary rounded-full p-1 h-7 w-7"/> 
                <p>{Gastronomy.description}</p>
            </div>
             <h2 className="text-orange-orangePrimary">A mais</h2>
            <div className="shadow">
                {
                    highlights.map((highlight, index) => {
                        return (
                            <div className="flex gap-2 p-1" key={index.toString()}>
                                <CheckCircle size={20} color="#E5881B"/>
                                <p className="text-sm">{highlight}</p>
                            </div>
                        )
                    })
                }
            </div>
        
        </article>
    )
};
