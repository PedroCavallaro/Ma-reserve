import { RestaurantInfo } from "@/@types/types";
import { BsBookmarks } from "react-icons/bs";
import { Button } from "../Button";
import Image from "next/image";
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
            <div className="flex justify-between items-center">
                <div className="flex justify-between flex-col gap-1">
                    <Image
                        alt={`Restaurant ${name}`}
                        src={"/test.jpeg"}
                        width={200}
                        height={50}
                        className="w-44 h-20 object-cover"
                    />
                    <Image
                        alt={`Restaurant ${name}`}
                        src={"/test.jpeg"}
                        width={200}
                        height={50}
                        className="w-44 h-20 object-cover"
                    />
                </div>
                <Image
                    alt={`Restaurant ${name}`}
                    src={"/test.jpeg"}
                    width={200}
                    height={50}
                    className="h-[10.25rem] object-cover"
                />
            </div>
        </section>
    );
}
