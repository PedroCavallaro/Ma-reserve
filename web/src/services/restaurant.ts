import { serverRoutes } from "@/constants/constants";
import { api } from "@/lib/api";

export async function getRestaurant(id: string) {
    const res = await api.get(serverRoutes.ONERESTAURANT(id));
    return res.data;
}
