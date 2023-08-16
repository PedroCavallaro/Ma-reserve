"use client";
import { RestaurantInfo } from "@/@types/types";
import RestaurantCard from "@/components/RestaurantCard";
import NotFound from "@/components/Results/NotFound";
import { routes } from "@/constants/constants";
import { useRestaurant } from "@/hooks/useRestaurant";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useMemo, useState } from "react";

export default function Results({ params }: { params: { query: string } }) {
    const router = useRouter();
    const [restaurants, setRestaurants] = useState<RestaurantInfo[]>();
    const { getRestaurantsByQuery, getRestaurantsByGastronomy } =
        useRestaurant();

    const handlerTextQuery = useCallback(async () => {
        const res = await getRestaurantsByQuery(params.query[1]);
        setRestaurants(res);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleGastronomyQuery = useCallback(async () => {
        const res = await getRestaurantsByGastronomy(params.query[1]);
        setRestaurants(res);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if (params.query.length > 2) {
            router.push("/");
        }
        if (params.query.includes("query")) {
            handlerTextQuery();
        }
        if (params.query.includes("gastronomy")) {
            handleGastronomyQuery();
        }
    }, [params, router, handlerTextQuery, handleGastronomyQuery]);
    if (!restaurants?.length) {
        return <NotFound />;
    }
    return (
        <main>
            <section className="flex flex-col justify-center items-center gap-4 mt-5">
                <h2 className="text-orange-400 text-lg">
                    Resultados encontrados
                </h2>
                <div className="flex flex-col gap-4">
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
                                    isFull
                                />
                            );
                        }
                    )}
                </div>
            </section>
        </main>
    );
}
