"use client";
import { routes } from "@/constants/constants";
import { useFilter } from "@/hooks/useFilter";
import Link from "next/link";
import { LuChefHat } from "react-icons/lu";
export default function GastronomyFilter() {
    const { gastronomies } = useFilter();
    return (
        <section className="w-full flex flex-col gap-2">
            <div className="flex justify-center items-center gap-4">
                <div className="w-full h-1 bg-orange-300 rounded-full"></div>
                <p className="text-orange-300 font-semibold text-lg">
                    Gastronomias
                </p>
                <div className="w-full h-1 bg-orange-300 rounded-full"></div>
            </div>
            <div className="px-2 flex gap-6 overflow-scroll justify-center items-center">
                {gastronomies?.map((gastronomy, index) => {
                    return (
                        <Link
                            href={`${routes.GASTRONOMYQUERY}${gastronomy.id}`}
                            key={index.toString()}
                            className="flex flex-col items-center gap-2"
                        >
                            <div className="bg-orange-300 rounded-full h-10 w-10 flex items-center justify-center">
                                <LuChefHat color={"#FFF"} className="w-7 h-7" />
                            </div>
                            <p className="text-sm">{gastronomy.description}</p>
                        </Link>
                    );
                })}
            </div>
            <div className="w-full h-1 bg-orange-300 rounded-full"></div>
        </section>
    );
}
