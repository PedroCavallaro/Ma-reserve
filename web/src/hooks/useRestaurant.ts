import { useCallback, useEffect, useState } from "react";
import { api } from "../lib/api";
import { RestaurantInfo } from "@/@types/types";

export function useRestaurant(route: string) {
    const [restaurant, setRestaurant] = useState<RestaurantInfo[]>();

    const handleRestaurants = useCallback(async () => {
        const res = await api.get(`${route}`);
        setRestaurant(res.data);
    }, [route]);

    useEffect(() => {
        handleRestaurants();
    }, [handleRestaurants]);
    console.log(restaurant);
    return {
        restaurant,
    };
}
