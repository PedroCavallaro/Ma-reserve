import { FastifyInstance } from "fastify";
import { prisma } from "../lib/prisma";
import { z } from "zod";

export async function whishlistRoutes(app: FastifyInstance) {
    app.post("/whishlist", async (req, reply) => {
        const schema = z.object({
            userId: z.string(),
            restaurantId: z.string().uuid(),
        });

        const { restaurantId, userId } = schema.parse(req.body);
        const alreadySaved = await prisma.wishList.findMany({
            where: {
                userId,
            },
        });

        if (alreadySaved[0])
            return reply
                .status(409)
                .send({ message: "Item já salvo na Lista" });

        const saved = await prisma.wishList.create({
            data: {
                userId,
                restaurantId,
            },
        });
        return saved;
    });
    app.get("/wishlist/:id", async (req) => {
        const schema = z.object({
            userId: z.string(),
        });

        const {} = schema.parse(req.params);
    });
}
