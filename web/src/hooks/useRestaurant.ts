import { serverRoutes } from "@/constants/constants";
import { api } from "@/lib/api";

export function useRestaurant() {
    async function getRestaurant(id: string) {
        const res = await api.get(serverRoutes.ONERESTAURANT(id));
        return res.data;
    }
    async function getRestaurantsByGastronomy(gastronomy: string) {
        const res = await api.get(`filteredRestaurants/${gastronomy}`);
        return res.data;
    }
    async function getRestaurantsByQuery(query: string) {
        const res = await api.get(`restaurants/${query}`);
        return res.data;
    }

    return {
        getRestaurantsByQuery,
        getRestaurant,
        getRestaurantsByGastronomy,
    };
}
