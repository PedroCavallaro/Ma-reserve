import { Button } from "@/components/Button";
import { BsBookmarks } from "react-icons/bs";

export default function Heading({
    restaurantName,
}: {
    restaurantName: string;
}) {
    return (
        <div className="flex  items-center justify-between">
            <div className="flex text-orange-400 gap-2 items-center">
                <h1 className="font-semibold text-[1.3rem]">
                    {restaurantName}
                </h1>
                <Button className="bg-white text-orange-400">
                    <BsBookmarks size={20} />
                </Button>
            </div>
            <Button className="h-8 text-sm">
                <p>Ver Cardápio</p>
            </Button>
        </div>
    );
}
