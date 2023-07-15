import Image from "next/image"
export default function RestaurantLocation() {
    return (
        <div className="flex flex-col">
            <h2 className="text-orange-orangePrimary">Localização</h2>
            <Image src="/map.png" height={200} width={200} alt="map" className="w-[100%] shadow-lg min-h-[200px] bg-black"/>
            
        </div>
    )
};
