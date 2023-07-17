"use client"
import { RestaurantInfo } from "@/interfaces";
import { Input } from "../Input";
import ItemCard from "./ItemCard";
import { useState } from "react";


const foodTypes = [
    "Comida",
    "Bebida",
    "Sobremesa"
]


export default function Items({Menu}: Pick<RestaurantInfo, "Menu">) {
    function handleButtonClick(value: string){
        setFilter(value)
    }
    
    const [filter, setFilter] = useState<string>(foodTypes[0])

    const filteredItems = Menu?.filter((item) => item.FoodType.description.includes(filter))
   
    return(
        <section className="flex flex-col">
            <div className="flex justify-start gap-3 p-2">
            {
                    foodTypes.map((foodType, index) => {
                        return(
                            <Input type="button" key={index.toString()} value={foodType} 
                            className={`cursor-pointer`}
                            onClick={()=> handleButtonClick(foodType)}
                            />
                        )
                    })
                }
            </div>
            <section className="flex flex-col p-1">
                {
                    filteredItems?.map((item, index) => {
                        return (
                            <ItemCard 
                            description={item.description}
                            name={item.description}
                            picture={item.pictures[0]}
                            price={item.price}
                            key={index.toString()}/>

                        )
                    })
                }
            </section>
       
            
        </section>
    )
};
