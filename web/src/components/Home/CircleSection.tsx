"use client";
import RestaurantCircle from "../RestaurantCircle";
import { RestaurantInfo } from "@/@types/types";

export default function CircleSection({
    tittle,
    restaurants,
}: {
    tittle: string;
    restaurants: RestaurantInfo[];
}) {
    return (
        <section className="flex flex-col gap-1 p-2 relative">
            <p className="text-orange-400 font-semibold ">{tittle}</p>
            <div className="flex overflow-scroll relative gap-3 py-3">
                {restaurants?.map(({ name, coverImage, id }, index) => {
                    return (
                        <RestaurantCircle
                            id={id}
                            key={index.toString()}
                            image={coverImage}
                            name={name}
                        />
                    );
                })}
            </div>
        </section>
    );
}
