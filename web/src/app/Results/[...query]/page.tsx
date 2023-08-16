"use client";
import { RestaurantInfo } from "@/@types/types";
import RestaurantCard from "@/components/RestaurantCard";
import { routes } from "@/constants/constants";
import { useRestaurant } from "@/hooks/useRestaurant";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

export default function Results({ params }: { params: { query: string } }) {
    const router = useRouter();
    const [restaurants, setRestaurants] = useState<RestaurantInfo[]>();
    const { getRestaurantsByQuery, getRestaurantsByGastronomy } =
        useRestaurant();

    const handlerTextQuery = useCallback(async () => {
        setRestaurants(await getRestaurantsByQuery(params.query[1]));
    }, [params.query, getRestaurantsByQuery]);

    const handleGastronomyQuery = useCallback(async () => {
        setRestaurants(await getRestaurantsByGastronomy(params.query[1]));
    }, [getRestaurantsByGastronomy, params.query]);

    useEffect(() => {
        if (params.query.includes("query")) {
            handlerTextQuery();
        }
        if (params.query.includes("gastronomy")) {
            handleGastronomyQuery();
        }
    }, [router, params.query, handleGastronomyQuery, handlerTextQuery]);

    console.log(params.query);
    return (
        <main>
            <section className="flex flex-col justify-center items-center gap-4 mt-5">
                <h2 className="text-orange-400 text-lg">
                    Resultados encontrados
                </h2>
                <div>
                    {restaurants?.map(
                        (
                            {
                                Gastronomy,
                                about,
                                id,
                                coverImage,
                                name,
                                highlights,
                            },
                            index
                        ) => {
                            return (
                                <RestaurantCard
                                    key={index.toString()}
                                    Gastronomy={Gastronomy}
                                    about={about}
                                    id={id}
                                    coverImage={coverImage}
                                    highlights={highlights}
                                    name={name}
                                />
                            );
                        }
                    )}
                </div>
            </section>
        </main>
    );
}
