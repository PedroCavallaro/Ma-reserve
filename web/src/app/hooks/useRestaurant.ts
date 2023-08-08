import { useCallback, useEffect, useState } from "react";
import { api } from "../lib/api";
import { RestaurantInfo } from "../types";

export function useRestaurant() {
    const [restaurant, setRestaurant] = useState<RestaurantInfo[]>();

    const handleRestaurants = useCallback(async () => {
        const res = await api.get("/restaurants");
        setRestaurant(res.data);
    }, []);

    useEffect(() => {
        handleRestaurants();
    }, [handleRestaurants]);
    return {
        restaurant,
    };
}
