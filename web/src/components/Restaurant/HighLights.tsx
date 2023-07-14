import { RestaurantInfo } from "@/interfaces";
import { CheckCircle } from "lucide-react";

export function HighLights({highlights}: Pick<RestaurantInfo, "highlights">) {
    return(
        <article>
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
