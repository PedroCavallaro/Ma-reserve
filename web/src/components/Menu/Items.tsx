"use client"
import { RestaurantInfo } from "@/interfaces";
import { Input } from "../Input";
import ItemCard from "./ItemCard";
import { useState } from "react";


const foodTypes = [
    "Pratos",
    "Bebidas",
    "Sobremesa"
]


export default function Items({Menu}: Pick<RestaurantInfo, "Menu">) {
    function handleButtonClick(value: string): void{
        filter === value ? [] : setFilter(value)
    }
    const [filter, setFilter] = useState<string>(foodTypes[0])   
    const filteredItems = Menu?.filter((item) => item.FoodType.description.includes(filter))
    return(
        <section className="flex flex-col mt-1">
            <div className="flex flex-col p-2">
                <div className="flex justify-start gap-3">

            {
                    foodTypes.map((foodType, index) => {
                        return(
                            <Input type="button" key={index.toString()} value={foodType} 
                            className={`cursor-pointer  ${foodType === filter && "text-orange-orangePrimary"  }`}
                            onClick={()=> handleButtonClick(foodType)}
                            />
                            )
                        })
                    }
                </div>
                {/* <span className="bg-orange-400 w-[3.7rem] h-[4px] rounded-full"></span> */}
            </div>
            <section className="flex flex-col gap-4 p-1">
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
