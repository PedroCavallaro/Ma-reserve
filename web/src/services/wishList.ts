import { api } from "@/lib/api";
import { getUser } from "./auth";

export async function addToWishList(restaurantId: string): Promise<void> {
    const { sub } = getUser();
    await api.post("/whishlist", {
        userId: sub,
        restaurantId,
    });
}
