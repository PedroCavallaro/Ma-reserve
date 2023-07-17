import Image from "next/image"

interface ItemCardProps{
    name: string,
    price: number,
    picture: string,
    description: string
}
export default function ItemCard(ItemCardProps: ItemCardProps) {
    return(
        <div className="flex shadow gap-2 relative p-1">
            <Image alt={ItemCardProps.name} src={`/${ItemCardProps.picture}`} 
            className="w-[10rem] h-[7rem] object-cover"
            width={100} height={100} />
            <div className="flex flex-col">
                <div className="flex gap-12 text-orange-orangePrimary text-lg  w-[100%]">
                    <h2>{ItemCardProps.name.substring(0, 15)}</h2>
                    <h2>R${ItemCardProps.price}</h2>
                </div>
                <p className="w-max-[10px] h-max-[10px] overflow-hidden">{ItemCardProps.description.substring(0, 20)}</p>
            </div>
        </div>
    )
};
