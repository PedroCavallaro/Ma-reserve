"use client"
import { useMemo, useState } from 'react'
import SearchArea from '../components/Home/Search'
import Filters from '@/components/Home/Filters'
import { api } from './lib/api'
type Restaurant ={
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
  const [restaurants, setRestaurant] = useState<Restaurant[]>()

  const memo = useMemo(async ()=>{}, [])

  return (
    <div className='flex flex-col gap-2'>
      <SearchArea/>
      <Filters/>
    </div>
  )
}
