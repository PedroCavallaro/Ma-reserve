import Image from 'next/image'
import SearchArea from '../components/Home/Search'
import Filters from '@/components/Home/Filters'

export default function Home() {
  return (
    <div className='flex flex-col gap-2'>
      <SearchArea/>
      <Filters/>
    </div>
  )
}
