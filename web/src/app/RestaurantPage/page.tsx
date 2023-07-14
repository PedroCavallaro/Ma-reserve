"use client"
import { RestaurantInfo } from "@/interfaces"
import { useQuery } from "@tanstack/react-query"
import { api } from "../lib/api"
import Hero from "@/components/Restaurant/Hero"
import { ReservationForm } from "@/components/Restaurant/ReservationForm"
import RestaurantLocation from "@/components/Restaurant/RestaurantLocation"
import CommentSection from "@/components/Restaurant/CommentSection"

const getRestaurant = async (id: string) => {
    const response = await api.get<RestaurantInfo[]>(`/restaurants/${id}`)
    
    return response.data
  }
  
export default function Restaurant() {
    const id = JSON.parse(localStorage.getItem("restaurant") || "{}")

    const {data, isLoading } = useQuery<RestaurantInfo[]>({
        queryKey: ["Restaurant", id],
        queryFn: async () => await getRestaurant(id)
    })
    console.log(data)

    return(
        <section className="flex flex-col p-1 gap-2 h-[100rem]">  
        {
            typeof data !== "undefined" && (
                <>
                    <Hero 
                    pictures={data![0].pictures}
                    name={data![0].name}    
                    about={data![0].about}
                    id={data![0].id!} 
                    highlights={data![0].highlights}
                    FoodType={data![0].FoodType}
                    >
                        <ReservationForm/>
                    </Hero> 
            
            
                <RestaurantLocation/>
                
                <CommentSection Comments={data![0].Comments}/>
                </>
            )
        }
        </section>
    )
};
