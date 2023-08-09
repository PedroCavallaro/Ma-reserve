"use client";
import { useFilter } from "@/app/hooks/useFilter";
import { BiSushi } from "react-icons/bi";
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
            <div className="px-2 flex gap-6 overflow-scroll">
                {gastronomies?.map((gastronomy, index) => {
                    return (
                        <button
                            key={index.toString()}
                            className="flex flex-col items-center gap-2"
                        >
                            <div className="bg-orange-300 rounded-full h-10 w-10 flex items-center  justify-center">
                                <BiSushi color={"#FFF"} className="w-7 h-7" />
                            </div>
                            <p className="text-sm">{gastronomy.description}</p>
                        </button>
                    );
                })}
            </div>
            <div className="w-full h-1 bg-orange-300 rounded-full"></div>
        </section>
    );
}
