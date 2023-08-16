"use client";
import { RestaurantInfo } from "@/@types/types";
import Filter from "@/components/Menu/Filter";
import Hero from "@/components/Menu/Hero";
import PlateCard from "@/components/Menu/PlateCard";
import { FoodTypes } from "@/constants/constants";
import { useRestaurant } from "@/hooks/useRestaurant";
import { useQuery } from "@tanstack/react-query";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Menu() {
    const [type, setType] = useState(FoodTypes[0] as string);
    const id = usePathname().split("/")[2];
    const { getRestaurant } = useRestaurant();
    const { data: restaurant, isLoading } = useQuery<RestaurantInfo>({
        queryKey: ["restaurant"],
        queryFn: () => getRestaurant(id),
    });

    function filtering(type: string) {
        setType(type);
    }
    if (isLoading) {
        return (
            <section>
                <p>Carregando</p>
            </section>
        );
    }
    if (typeof restaurant !== "undefined") {
        const { Menu } = restaurant;
        const filteredMenu = Menu!.filter(
            (e) => e.FoodType?.description === type
        );

        return (
            <main>
                <section className="flex flex-col gap-4 mt-3">
                    <Hero
                        coverImage={restaurant.coverImage}
                        name={restaurant.name}
                    />

                    <div className="flex gap-2 px-2">
                        <Filter actualType={type} filtering={filtering} />
                    </div>
                    <section className="flex flex-col gap-3">
                        {filteredMenu?.map((plate, index) => {
                            return (
                                <PlateCard
                                    name={plate.name}
                                    price={plate.price}
                                    description={plate.description}
                                    pictures={plate.pictures}
                                    key={index.toString()}
                                />
                            );
                        })}
                    </section>
                </section>
            </main>
        );
    }
}
