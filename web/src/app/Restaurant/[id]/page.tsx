"use client";
import ExtraInfo from "@/components/Restaurant/ExtraInfo";
import Hero from "@/components/Restaurant/Hero/Hero";
import { serverRoutes } from "@/constants/constants";
import { useRestaurant } from "@/hooks/useRestaurant";
import { usePathname } from "next/navigation";

export default function Restaurant() {
    const id = usePathname().split("/")[2];
    const { restaurant } = useRestaurant(serverRoutes.ONERESTAURANT(id));

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
                    },
                    index
                ) => {
                    return (
                        <section
                            key={index.toString()}
                            className="flex flex-col px-2 gap-4"
                        >
                            <Hero
                                id={id}
                                coverImage={coverImage}
                                pictures={pictures}
                                name={name}
                                about={about}
                                highlights={highlights}
                                Comments={Comments}
                                Gastronomy={Gastronomy}
                            />
                            <ExtraInfo gastronomy={Gastronomy.description} />
                        </section>
                    );
                }
            )}
        </main>
    );
}
