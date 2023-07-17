"use client"
import { RestaurantInfo } from "@/interfaces"
import { useQuery } from "@tanstack/react-query"
import { api } from "../lib/api"
import Hero from "@/components/Restaurant/Hero"
import { ReservationForm } from "@/components/Restaurant/ReservationForm"
import RestaurantLocation from "@/components/Restaurant/RestaurantLocation"
import {CommentSection} from "@/components/Restaurant/CommentSection"
import { HighLights } from "@/components/Restaurant/HighLights"

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
    return(
        <section className="flex flex-col p-1 gap-4 ">  
        {
            !isLoading && (
                <>
                    <Hero 
                    pictures={data![0].pictures}
                    name={data![0].name}    
                    about={data![0].about}
                    id={data![0].id!} 
                    highlights={data![0].highlights}
                    Gastronomy={data![0].Gastronomy}
                />
        <section className="top-0 gap-2"> 
            <ReservationForm>
                <HighLights Gastronomy={data![0].Gastronomy} highlights={data![0].highlights}/>
            </ReservationForm>
        </section>           
        <RestaurantLocation/>
        
        <CommentSection Comments={data![0].Comments}/>
        </>
            )
        }
        </section>
    )
};
