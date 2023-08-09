import { RestaurantInfo } from "@/@types/types";
import { api } from "@/lib/api";
import { ReactNode, createContext } from "react";

type RestaurantContext = {
    getRestaurantInfo: (id: string) => Promise<RestaurantInfo[]>;
};

export const RestaurantContext = createContext({} as RestaurantContext);

export function RestauratProvider({ children }: { children: ReactNode }) {
    async function getRestaurantInfo(id: string) {
        const res = await api.get(`/restaurant/${id}`);
        return res.data as RestaurantInfo[];
    }
    return (
        <RestaurantContext.Provider value={{ getRestaurantInfo }}>
            {children}
        </RestaurantContext.Provider>
    );
}
