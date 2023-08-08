import { useRestaurant } from "@/app/hooks/useRestaurant";
import RestaurantCard from "../RestaurantCard";

export default function InterestSection() {
    const { restaurant } = useRestaurant();
    return (
        <section>
            <p className="text-orange-400 font-semibold">Talvez te interesse</p>
            <div className="flex gap-3">
                <RestaurantCard />
            </div>
        </section>
    );
}
