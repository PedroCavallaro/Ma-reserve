import { routes } from "@/constants/constants";
import Image from "next/image";
import Link from "next/link";
interface RestaurantCircleProps {
    id: string;
    image: string;
    name: string;
}
export default function RestaurantCircle({
    id,
    name,
    image,
}: RestaurantCircleProps) {
    return (
        <Link
            href={`${routes.RESTAURANT}/${id}`}
            className="flex flex-col gap-2 items-center"
        >
            <div className="rounded-full overflow-hidden w-18 h-18 ">
                <Image
                    src={`/${image}`}
                    alt={name}
                    width={100}
                    height={100}
                    className="w-20 h-20 object-cover "
                />
            </div>
            <p className="text-xs">{name}</p>
        </Link>
    );
}
