import { RestaurantInfo } from "@/@types/types";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import { useRef } from "react";

export default function Location({
    latitude,
    longitude,
}: Pick<RestaurantInfo, "latitude" | "longitude">) {
    const mapRef = useRef(null);
    const { isLoaded } = useJsApiLoader({
        id: "google-map-script",
        googleMapsApiKey: `${process.env.NEXT_PUBLIC_MAPS_API_KEY}`,
    });

    const position = {
        lat: Number(latitude),
        lng: Number(longitude),
    };
    return (
        <section className="w-full h-[10rem]">
            {isLoaded && (
                <GoogleMap center={position} zoom={15} ref={mapRef}></GoogleMap>
            )}
        </section>
    );
}
