"use client";
import Hero from "@/components/Restaurant/Hero";
import { serverRoutes } from "@/constants/constants";
import { useRestaurant } from "@/hooks/useRestaurant";
import { usePathname } from "next/navigation";

export default function Restaurant() {
    const id = usePathname().split("/")[2];
    const { restaurant } = useRestaurant(serverRoutes.ONERESTAURANT(id));

    return (
        <main className="flex flex-col">
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
                    },
                    index
                ) => {
                    return (
                        <Hero
                            key={index.toString()}
                            id={id}
                            coverImage={coverImage}
                            pictures={pictures}
                            name={name}
                            about={about}
                            highlights={highlights}
                            Comments={Comments}
                            Gastronomy={Gastronomy}
                        />
                    );
                }
            )}
        </main>
    );
}
