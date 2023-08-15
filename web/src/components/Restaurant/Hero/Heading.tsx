import { Button } from "@/components/Button";
import { routes } from "@/constants/constants";
import { addToWishList } from "@/services/wishList";
import Link from "next/link";
import { BsBookmarks } from "react-icons/bs";

export default function Heading({
    id,
    restaurantName,
}: {
    restaurantName: string;
    id: string;
}) {
    return (
        <div className="flex  items-center justify-between">
            <div className="flex text-orange-400 gap-2 items-center">
                <h1 className="font-semibold text-[1.3rem]">
                    {restaurantName}
                </h1>
                <Button
                    onClick={() => addToWishList(id)}
                    className="bg-white text-orange-400"
                >
                    <BsBookmarks size={20} fill={"#E5881B"} />
                </Button>
            </div>
            <Button className="h-8 text-sm">
                <Link href={`${routes.MENU}${id}`}>Ver Cardápio</Link>
            </Button>
        </div>
    );
}
