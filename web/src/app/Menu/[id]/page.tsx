"use client";
import { RestaurantInfo } from "@/@types/types";
import { getRestaurant } from "@/services/restaurant";
import { useQuery } from "@tanstack/react-query";
import { usePathname } from "next/navigation";

export default function Menu() {
    const id = usePathname().split("/")[2];
    const { data, isLoading } = useQuery<RestaurantInfo[]>({
        queryKey: ["restaurant"],
        queryFn: () => getRestaurant(id),
    });
    if (typeof data !== "undefined") {
        const { Menu } = data[0];
        console.log(data + "apskld");
        return (
            <main>
                <section>
                    {Menu?.map((plate, index) => {
                        return (
                            <div key={index.toString()}>
                                <p>oi</p>
                            </div>
                        );
                    })}
                </section>
            </main>
        );
    } else {
        return (
            <section>
                <p>Carregando</p>
            </section>
        );
    }
}
