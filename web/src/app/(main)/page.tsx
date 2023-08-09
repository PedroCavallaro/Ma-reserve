"use client";
import Search from "@/components/Home/Search";
import GastronomyFilter from "@/components/Home/GastronomyFilter";
import CircleSection from "@/components/Home/CircleSection";
import { useContext } from "react";
import { AuthContext } from "@/contexts/AuthContext";
import CardSection from "@/components/Home/CardSection";
import Footer from "@/components/Footer";

export default function Home() {
    const { isAuth } = useContext(AuthContext);
    return (
        <main className="flex flex-col gap-4">
            <Search />
            <GastronomyFilter />
            {isAuth ? (
                <>
                    <CardSection tittle="Talvez te interesse" />
                    <CircleSection tittle="Reserve novamente" />
                    <CircleSection tittle="Restaurantes Salvos" />
                    <CardSection tittle="Restaurantes famosos" />
                </>
            ) : (
                ""
            )}
            <Footer />
        </main>
    );
}
