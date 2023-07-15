"use client"
import { RestaurantInfo } from "@/interfaces"
import { api } from "../../lib/api"
import Hero from "@/components/Menu/Hero"
import { useQuery } from "@tanstack/react-query"

const getRestaurant = async (id: string) => {
    const response = await api.get<RestaurantInfo[]>(`/restaurants/${id}`)
    
    return response.data
  }
  
export default function Menu() {
    const id = JSON.parse(localStorage.getItem("restaurant") || "{}")
    const {data, isLoading } = useQuery<RestaurantInfo[]>({
        queryKey: ["Restaurant", id],
        queryFn: async () => await getRestaurant(id)
    })
    return(
        <>
        {
            typeof data !== "undefined" &&(
                <Hero name={data![0].name} pictures={data![0].pictures}/>
            )
        }
        </>
    )
};
