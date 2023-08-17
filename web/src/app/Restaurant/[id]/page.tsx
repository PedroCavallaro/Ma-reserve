"use client";
import { RestaurantInfo } from "@/@types/types";
import { Button } from "@/components/Button";
import ExtraInfo from "@/components/Restaurant/ExtraInfo";
import Hero from "@/components/Restaurant/Hero/Hero";
import Location from "@/components/Restaurant/Location/Location";
import { useRestaurant } from "@/hooks/useRestaurant";
import { useQuery } from "@tanstack/react-query";
import { usePathname, useRouter } from "next/navigation";
import router from "next/router";

export default function Restaurant() {
    const router = useRouter();
    function setRestaurntidonLs(id: string) {
        localStorage.setItem("reservation", JSON.stringify(id));
        router.push("/Reservation");
    }
    const id = usePathname().split("/")[2];
    const { getRestaurant } = useRestaurant();
    const { data: restaurant, isLoading } = useQuery<RestaurantInfo>({
        queryKey: ["restaurant"],
        queryFn: () => getRestaurant(id),
    });

    if (isLoading) {
        return (
            <section>
                <p>Carregando</p>
            </section>
        );
    }
    if (typeof restaurant !== "undefined") {
        return (
            <main>
                <section className="flex flex-col px-2 gap-4">
                    <Hero
                        name={restaurant?.name}
                        about={restaurant?.about}
                        id={id}
                    />
                    <ExtraInfo
                        gastronomy={restaurant?.Gastronomy.description}
                        highlights={restaurant?.highlights}
                    />
                    {/* <Location
                                    latitude={latitude}
                                    longitude={longitude}
                                /> */}
                    <Button
                        className="w-full h-9"
                        onClick={() => setRestaurntidonLs(id)}
                    >
                        <p>Reservar</p>
                    </Button>
                </section>
            </main>
        );
    }
}
