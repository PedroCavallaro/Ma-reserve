"use client"
import { api } from "@/app/lib/api"
import { ChefHat } from "lucide-react"
import {useMemo, useState} from "react"


interface Gastronomy{
    description: string
}

export default function Filters() {
    const [filters, setFilters] = useState<Gastronomy[]>()

    const memo = useMemo(async ()=>{
        await api.get("/gastronomy")
        .then(({data}) => setFilters(data))
    }, [])

    return(
        <section className="container mx-auto">
            <div className="flex justify-center items-center gap-2">
                <hr className="bg-gray-grayPrimary w-[50%] h-1"/>
                <p className="text-orange-orangePrimary  text-center text-lg">Filtros</p>
                <hr className="bg-gray-grayPrimary w-[50%] h-1"/>
            </div>
            <div className="flex gap-4 lg:gap-8 ml-2 mr-2 justify-center items-center">
                {
                    filters?.map((gastronomy, index)=>{
                  
                        return(
                            <div 
                            key={index.toString()}
                            className="flex flex-col p-1 justify-center items-center group ">
                                <button className="rounded-full shadow h-[37px] w-[38px] lg:h-14 lg:w-14 justify-center items-center flex group-hover:bg-orange-orangePrimary transition-all">
                                    <ChefHat color="#cdcdcd" size={25} className="group-hover:fill-orange-orangePrimary transition-all" />
                                </button>
                                <p className="text-black text-center text-md group-hover:text-orange-orangePrimary">{gastronomy.description}</p>
                            </div>
                        )
                    })
                }
            </div>
            <hr className="bg-gray-grayPrimary w-[100%] h-1"/>
        </section>
    )
};
