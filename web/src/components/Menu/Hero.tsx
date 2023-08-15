import { RestaurantInfo } from "@/@types/types";
import Image from "next/image";
export default function Hero({
    coverImage,
    name,
}: Pick<RestaurantInfo, "coverImage" | "name">) {
    return (
        <section className="flex flex-col gap-2">
            <Image
                src={`/${coverImage}`}
                alt={name}
                className="w-full h-44 object-cover"
                width={600}
                height={300}
            />
            <h1 className="text-orange-400 text-center text-lg font-semibold">
                {name}
            </h1>
        </section>
    );
}
