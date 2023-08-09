"use client";
import { useRestaurant } from "@/hooks/useRestaurant";
import RestaurantCircle from "../RestaurantCircle";
import { serverRoutes } from "@/constants/constants";

export default function CircleSection({ tittle }: { tittle: string }) {
    const { restaurant } = useRestaurant(serverRoutes.RESTAURANTS);

    return (
        <section className="flex flex-col gap-1 p-2 relative">
            <p className="text-orange-400 font-semibold ">{tittle}</p>
            <div className="flex overflow-scroll relative gap-3 py-3">
                {restaurant?.map(({ name, coverImage }, index) => {
                    return (
                        <RestaurantCircle
                            key={index.toString()}
                            image={coverImage}
                            name={name}
                        />
                    );
                })}
            </div>
        </section>
    );
}
