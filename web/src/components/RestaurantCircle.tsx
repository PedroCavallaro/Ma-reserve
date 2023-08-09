import Image from "next/image";
interface RestaurantCircleProps {
    image: string;
    name: string;
}
export default function RestaurantCircle({
    name,
    image,
}: RestaurantCircleProps) {
    return (
        <button className="flex flex-col gap-2 items-center">
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
        </button>
    );
}
