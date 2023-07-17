"use client"
import { RestaurantInfo } from "@/interfaces"
import { api } from "../../lib/api"
import Hero from "@/components/Menu/Hero"
import { useQuery } from "@tanstack/react-query"
import Items from "@/components/Menu/Items"

const getRestaurant = async (id: string) => {
    const response = await api.get<RestaurantInfo[]>(`/restaurants/${id}`)
    
    return response.data
  }
  
export default function Menu() {
    const id = JSON.parse(localStorage.getItem("restaurant") || "{}")
    const {data, isLoading} = useQuery<RestaurantInfo[]>({
        queryKey: ["Restaurant", id],
        queryFn: async () => await getRestaurant(id)
    })
    
    if(typeof data !== "undefined") {
        const {Menu} = data[0]
        console.log(data[0])

        return(
            <main className="flex flex-col gap-2">
                <Hero name={data![0].name} pictures={data![0].pictures}/>
                <Items Menu={Menu}/>
            </main>
        )
    }
};
