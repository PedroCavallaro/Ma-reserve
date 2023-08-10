import { RestaurantInfo } from "@/@types/types";
import { BsBookmarks } from "react-icons/bs";
import { Button } from "../Button";
import Image from "next/image";
import Slider from "./Slider";
export default function Hero({
    name,
    about,
    id,
    coverImage,
    pictures,
    Gastronomy,
    highlights,
    Comments,
}: RestaurantInfo) {
    return (
        <section className="px-3 py-2 gap-2 mt-1 flex flex-col">
            <div className="flex  items-center justify-between">
                <div className="flex text-orange-400 gap-2 items-center">
                    <h1 className="font-semibold text-[1.3rem]">{name}</h1>
                    <Button className="bg-white text-orange-400">
                        <BsBookmarks size={20} />
                    </Button>
                </div>
                <Button className="h-8 text-sm">
                    <p>Ver Cardápio</p>
                </Button>
            </div>
            <div className="flex items-center w-full relative justify-center">
                <Slider />
            </div>
        </section>
    );
}
