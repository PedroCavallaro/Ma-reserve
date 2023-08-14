"use client";
import { RestaurantInfo } from "@/@types/types";
import { Button } from "@/components/Button";
import ExtraInfo from "@/components/Restaurant/ExtraInfo";
import Hero from "@/components/Restaurant/Hero/Hero";
import Location from "@/components/Restaurant/Location/Location";
import { getRestaurant } from "@/services/restaurant";
import { useQuery } from "@tanstack/react-query";
import { usePathname } from "next/navigation";

export default function Restaurant() {
    const id = usePathname().split("/")[2];
    const { data: restaurant, isLoading } = useQuery<RestaurantInfo[]>({
        queryKey: ["restaurant"],
        queryFn: () => getRestaurant(id),
    });

    return (
        <main>
            {restaurant?.map(
                (
                    {
                        name,
                        about,
                        id,
                        coverImage,
                        pictures,
                        Gastronomy,
                        highlights,
                        Comments,
                        latitude,
                        longitude,
                    },
                    index
                ) => {
                    return (
                        <section
                            key={index.toString()}
                            className="flex flex-col px-2 gap-4"
                        >
                            <Hero name={name} about={about} id={id} />
                            <ExtraInfo
                                gastronomy={Gastronomy.description}
                                highlights={highlights}
                            />
                            {/* <Location
                                latitude={latitude}
                                longitude={longitude}
                            /> */}
                            <Button className="w-full h-9">
                                <p>Reservar</p>
                            </Button>
                        </section>
                    );
                }
            )}
        </main>
    );
}
