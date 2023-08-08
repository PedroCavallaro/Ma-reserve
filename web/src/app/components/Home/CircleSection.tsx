"use client";
import { useRestaurant } from "@/app/hooks/useRestaurant";
import RestaurantCircle from "../RestaurantCircle";

export default function CircleSection({ tittle }: { tittle: string }) {
    const { restaurant } = useRestaurant();

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
