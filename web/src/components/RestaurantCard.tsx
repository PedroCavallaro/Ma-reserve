import { ChefHat } from "lucide-react"
import  Image  from "next/image"
import { CheckCircle2 } from 'lucide-react';
import { useRouter } from "next/navigation";
import { RestaurantInfo } from "@/interfaces";
import Button from "./Button";


const handleButtonClick = (id: string)=> {
    localStorage.setItem("restaurant", JSON.stringify(id))

}
export default function RestaurantCard(RestaurantInfo: RestaurantInfo) {
    const router = useRouter()

   
    return( 
        <div className="flex text-black w-[320px] shadow-lg min-h-[140px] gap-3 p-1">
            <Image src={`/${RestaurantInfo.pictures[0]}`} alt={RestaurantInfo.name} width={140} height={130}
            className="object-cover"/>
            <div className="flex flex-col gap-2">
                <h1 className="text-orange-orangePrimary text-lg">{RestaurantInfo.name}</h1>
                <div className="text-sm flex gap-1 flex-col">
                    <div className="flex gap-2 items-center justify-start">
                        <div className="rounded-full shadow w-6 h-6 bg-orange-orangePrimary flex items-center justify-center">
                            <ChefHat size={15} color="#D9D9D9"/>
                        </div>
                        <p>{RestaurantInfo.FoodType.description}</p>
                    </div>
                    {
                        RestaurantInfo.highlights.map((highlight, index) => {
                            return(
                                <div key={index.toString()} className="flex gap-2 items-center justify-start">       
                                    <CheckCircle2 size={15} color="#E5881B"/>
                                    <p className="text-sm">{highlight}</p>
                                </div>
                            )
                        })
                    }
                </div>
                    <Button 
                    onClick={()=> {
                        handleButtonClick(RestaurantInfo.id)
                        router.push("/RestaurantPage")
                    }}
                    title= "Ver mais informações"
                   
                    />
                       
            </div>
        </div>
    )
};
