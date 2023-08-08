"use client";
import { useRestaurant } from "@/app/hooks/useRestaurant";
import RestaurantCard from "../RestaurantCard";
import Section from "../Section";

export default function InterestSection() {
    const { restaurant } = useRestaurant();

    return (
        <Section text="Talvez te Interesse">
            <div className="flex gap-3">
                {restaurant?.map(
                    (
                        { id, name, about, coverImage, highlights, Gastronomy },
                        index
                    ) => {
                        return (
                            <>
                                <RestaurantCard
                                    key={index.toString()}
                                    id={id}
                                    name={name}
                                    about={about}
                                    coverImage={coverImage}
                                    highlights={highlights}
                                    Gastronomy={Gastronomy}
                                />
                            </>
                        );
                    }
                )}
            </div>
        </Section>
    );
}
