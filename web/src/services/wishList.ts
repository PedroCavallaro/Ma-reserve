import { api } from "@/lib/api";
import { getUser } from "./auth";

export async function addToWishList(restaurantId: string): Promise<void> {
    const { sub } = getUser();
    await api.post("/whishlist", {
        userId: sub,
        restaurantId,
    });
}
export async function removeFromWishList(restaurantId: string): Promise<void> {
    const { sub } = getUser();
    await api.delete("/whishlist", {
        data: {
            userId: sub,
            restaurantId,
        },
    });
}
