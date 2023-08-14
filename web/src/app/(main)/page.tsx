"use client";
import Search from "@/components/Home/Search";
import GastronomyFilter from "@/components/Home/GastronomyFilter";
import CircleSection from "@/components/Home/CircleSection";
import { useContext } from "react";
import { AuthContext } from "@/contexts/AuthContext";
import CardSection from "@/components/Home/CardSection";
import Footer from "@/components/Footer";
import { api } from "@/lib/api";
import { serverRoutes } from "@/constants/constants";
import { useQuery } from "@tanstack/react-query";

async function getRestaurants() {
    const res = await api.get(serverRoutes.RESTAURANTS);
    return res.data;
}

export default function Home() {
    const { data, isLoading } = useQuery({
        queryKey: ["restaurants"],
        queryFn: getRestaurants,
    });
    const { isAuth } = useContext(AuthContext);
    return (
        <main className="flex flex-col gap-4">
            <Search />
            <GastronomyFilter />
            {isAuth ? (
                <>
                    <CardSection
                        restaurants={data}
                        tittle="Talvez te interesse"
                    />
                    <CircleSection
                        restaurants={data}
                        tittle="Reserve novamente"
                    />
                    <CircleSection
                        restaurants={data}
                        tittle="Restaurantes Salvos"
                    />
                    <CardSection
                        restaurants={data}
                        tittle="Restaurantes famosos"
                    />
                </>
            ) : (
                ""
            )}
            <Footer />
        </main>
    );
}
