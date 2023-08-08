"use client";
import { useRestaurant } from "@/app/hooks/useRestaurant";
import RestaurantCard from "../RestaurantCard";
import Section from "../Section";
import { text } from "stream/consumers";

export default function CardSection({ tittle }: { tittle: string }) {
    const { restaurant } = useRestaurant();

    return (
        <section className="flex flex-col gap-1 p-2 relative">
            <p className="text-orange-400 font-semibold ">{tittle}</p>
            <div className="flex overflow-scroll relative gap-2 py-3">
                {restaurant?.map(
                    (
                        { id, name, about, coverImage, highlights, Gastronomy },
                        index
                    ) => {
                        return (
                            <RestaurantCard
                                key={index.toString()}
                                id={id}
                                name={name}
                                about={about}
                                coverImage={coverImage}
                                highlights={highlights}
                                Gastronomy={Gastronomy}
                            />
                        );
                    }
                )}
            </div>
        </section>
    );
}