"use client"
import { useMemo, useState } from 'react'
import SearchArea from '../components/Home/Search'
import Filters from '@/components/Home/Filters'
import { api } from './lib/api'
import { useQuery } from '@tanstack/react-query'
import RestaurantCard from '@/components/RestaurantCard'

type Restaurant ={
  id: string,
  name: string,
  pictures: string[],
  highlights: string[],
  about: string,
  FoodType: {
    description: string
  }
}
const getRestaurants = async () => {
  const response = await api.get<Restaurant[]>("/restaurants")

  return response.data
}

export default function Home() {
  const {data, isLoading} = useQuery({
    queryKey: ["restaurants"],
    queryFn: getRestaurants
  })

    console.log(navigator.geolocation.getCurrentPosition((pos) => console.log(pos)))
  return (
    <div className='flex flex-col gap-2'>
      <SearchArea/>
      <Filters/>
      <section className='flex flex-col justify-center'>
        {
         
          data?.map((restaurant, index)=> {
            return(
                <RestaurantCard 
                key={index.toString()}
                id={restaurant.id}
                highlights={restaurant.highlights}
                pictures={restaurant.pictures}
                name={restaurant.name}
                FoodType={restaurant.FoodType}
                about={restaurant.about}/>
            )
          })
        }
      </section>
    </div>
  )
}
