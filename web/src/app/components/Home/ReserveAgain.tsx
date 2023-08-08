"use client";
import { useRestaurant } from "@/app/hooks/useRestaurant";
import RestaurantCard from "../RestaurantCard";
import Section from "../Section";
import RestaurantCircle from "../RestaurantCircle";

export default function ReserveAgain() {
    const { restaurant } = useRestaurant();

    return (
        <Section text="Reserve novamente">
            <div className="flex overflow-scroll relative gap-3 py-3">
                {restaurant?.map(({ name, coverImage }, index) => {
                    return (
                        <RestaurantCircle
                            key={index.toString()}
                            image={coverImage}
                            name={name}
                        />
                    );
                })}
            </div>
        </Section>
    );
}
