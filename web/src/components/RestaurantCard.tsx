import { ChefHat } from "lucide-react"
import  Image  from "next/image"
import { CheckCircle2 } from 'lucide-react';
interface RestaurantCard{
    name: string,
    pictures: string[],
    highlights: string[],
    about: string,
    FoodType: {
        description: string
    }
}

export default function RestaurantCard(RestaurantInfo: RestaurantCard) {
    return( 
        <div className="flex text-black">
            <Image src={`/${RestaurantInfo.pictures[0]}`} alt={RestaurantInfo.name} width={100} height={100}/>
            <div>
                <h1>{RestaurantInfo.name}</h1>
                <div>
                    <div>
                        <ChefHat/>
                        <p>{RestaurantInfo.FoodType.description}</p>
                    </div>
                    {
                        RestaurantInfo.highlights.map((highlight, index) => {
                            return(
                                <div key={index.toString()}>       
                                    <p>{highlight}</p>
                                    <CheckCircle2 color="#E5881B"/>
                                </div>
                            )
                        })
                    }
                    <p>{RestaurantInfo.about}</p>
                </div>
            </div>
        </div>
    )
};
