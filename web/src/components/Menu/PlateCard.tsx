import { Menu } from "@/@types/types";
import Image from "next/image";
export default function PlateCard({
    name,
    description,
    pictures,
    price,
}: Menu) {
    return (
        <div className="flex h-[10rem] w-full px-2 shadow-lg">
            <Image
                src={`/${pictures[0]}`}
                alt={name}
                width={300}
                height={300}
                className="h-full py-2 w-32 object-cover"
            />
            <div className="flex flex-col w-full">
                <div className="flex justify-between px-2">
                    <p className="text-orange-400 font-semibold">{name}</p>
                    <p className="text-orange-400 font-semibold">R${price}</p>
                </div>
                <p className="px-2 w-64 overflow-hidden">{description}</p>
            </div>
        </div>
    );
}
