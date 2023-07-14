import { RestaurantInfo } from "@/interfaces";
import Button from "../Button";

export default function Hero(RestaurantInfo: RestaurantInfo) {
  return(
    <>
        <section>
            <div className="flex text-orange-orangePrimary gap-2">
                <h1>{RestaurantInfo.name}</h1>
                <Button title="Ver Cardápio"/>
            </div>
            <div>
                <div>
                    <div className="bg-black h-10 w-10"></div>
                    <div className="bg-black h-10 w-10"></div>
                </div>
                <div className="bg-black h-20 w-20"></div>
            </div>
        </section>
    </>
  )  
};
