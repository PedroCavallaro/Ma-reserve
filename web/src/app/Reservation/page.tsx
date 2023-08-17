"use client";
import { RestaurantInfo } from "@/@types/types";
import Footer from "@/components/Footer";
import Hero from "@/components/Menu/Hero";
import ReservationForm from "@/components/Reservation/ReservationForm";
import Warning from "@/components/Reservation/Warning";
import { useRestaurant } from "@/hooks/useRestaurant";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

export default function Reservation() {
    const { getRestaurant } = useRestaurant();
    const [error, setError] = useState(false);
    const id = JSON.parse(localStorage.getItem("reservation") as string);

    if (!id) {
        setError(true);
    }

    const { data: restaurant, isLoading } = useQuery<RestaurantInfo>({
        queryKey: ["restaurant"],
        queryFn: () => getRestaurant(id),
    });

    if (error) {
        return (
            <main>
                <section>Parece que algo deu errado</section>
            </main>
        );
    }
    if (isLoading) {
        return (
            <main>
                <section>
                    <p>carregando</p>
                </section>
            </main>
        );
    }
    return (
        <main className="h-screen w-full flex flex-col justify-between overflow-x-hidden">
            <section className="mt-3 flex flex-col gap-2">
                <Hero
                    coverImage={restaurant!.coverImage}
                    name={restaurant!.name}
                />
                <ReservationForm />
                <Warning />
            </section>
            <Footer />
        </main>
    );
}
