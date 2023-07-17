"use client"
import SearchArea from '../components/Home/Search'
import Filters from '@/components/Home/Filters'
import { api } from './lib/api'
import { useQuery } from '@tanstack/react-query'
import RestaurantCard from '@/components/RestaurantCard'
import { RestaurantInfo } from '@/interfaces'

const getRestaurants = async () => {
  const response = await api.get<RestaurantInfo[]>("/restaurants")

  return response.data
}

export default function Home() {
  const {data, isLoading} = useQuery({
    queryKey: ["restaurants"],
    queryFn: getRestaurants
  })
    console.log(data)
    // console.log(navigator.geolocation.getCurrentPosition((pos) => console.log(pos)))
  return (
    <div className='flex flex-col gap-2'>
      <SearchArea/>
      <Filters/>
      <section className='flex relative flex-col justify-center gap-4'>
        {
         
          data?.map((restaurant, index)=> {
            return(
                <RestaurantCard 
                key={index.toString()}
                id={restaurant.id}
                highlights={restaurant.highlights}
                pictures={restaurant.pictures}
                name={restaurant.name}
                Gastronomy={restaurant.Gastronomy}
                about={restaurant.about}/>
            )
          })
        }
      </section>
    </div>
  )
}
