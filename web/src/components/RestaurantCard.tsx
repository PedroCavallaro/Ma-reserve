import Image from "next/image";
import Link from "next/link";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { routes } from "../constants/constants";
interface RestaurantCardProps {
    id: string;
    name: string;
    coverImage: string;
    highlights: string[];
    about: string;
    Gastronomy: {
        description: string;
    };
    isFull?: boolean;
}
export default function RestaurantCard({
    id,
    name,
    about,
    coverImage,
    highlights,
    Gastronomy,
    isFull,
}: RestaurantCardProps) {
    return (
        <div>
            <Link
                href={`${routes.RESTAURANT}/${id}`}
                className={`flex
                ${isFull ? "w-[25rem] h-[10rem]" : " w-[18rem]  h-[8rem]"}
                items-center px-1 gap-2 shadow-lg rounded-md`}
            >
                <Image
                    src={`/${coverImage}`}
                    width={120}
                    height={120}
                    alt={`Restaurante ${name}`}
                    className={`
                               ${isFull ? "w-[10rem] " : " "}
                    h-full px-1  py-1 object-cover`}
                />
                <div className="flex flex-col gap-1">
                    <h2 className="text-md text-orange-400">{name}</h2>
                    <div className="flex items-center text-xs gap-2">
                        <div className="bg-orange-400 rounded-full h-3 w-3"></div>
                        <p>{Gastronomy.description}</p>
                    </div>
                    <div>
                        {highlights.map((highlight, index) => {
                            return (
                                <div
                                    className="flex gap-2 items-center text-xs"
                                    key={index.toString()}
                                >
                                    <AiOutlineCheckCircle color="#E5881B" />
                                    <p>{highlight}</p>
                                </div>
                            );
                        })}
                    </div>
                    <p className="text-xs text-left">
                        {isFull
                            ? about.substring(0, 100).concat("...")
                            : about.substring(0, 30).concat("...")}
                    </p>
                </div>
            </Link>
        </div>
    );
}
