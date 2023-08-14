import { FastifyInstance } from "fastify";
import { prisma } from "../lib/prisma";
import { z } from "zod";

export async function restaurantRoutes(app: FastifyInstance) {
    app.get("/restaurants", async () => {
        const restaurants = await prisma.restaurant.findMany({
            select: {
                id: true,
                name: true,
                coverImage: true,
                about: true,
                pictures: true,
                highlights: true,
                max_guests: true,
                latitude: true,
                longitude: true,
                opening_time: true,
                closing_time: true,
                Gastronomy: {
                    select: {
                        description: true,
                    },
                },
                Comments: {
                    select: {
                        comment: true,
                    },
                },
            },
        });

        return restaurants;
    });
    app.get("/restaurant/:id", async (req) => {
        const schema = z.object({
            id: z.string().uuid(),
        });

        const { id } = schema.parse(req.params);

        const restaurant = await prisma.restaurant.findUnique({
            where: {
                id,
            },
            select: {
                id: true,
                name: true,
                about: true,
                pictures: true,
                highlights: true,
                max_guests: true,
                latitude: true,
                longitude: true,
                opening_time: true,
                closing_time: true,
                Gastronomy: {
                    select: {
                        description: true,
                    },
                },
                Comments: {
                    select: {
                        comment: true,
                        User: {
                            select: {
                                name: true,
                                image: true,
                            },
                        },
                    },
                },
                Menu: {
                    select: {
                        description: true,
                        price: true,
                        pictures: true,
                        FoodType: {
                            select: {
                                description: true,
                            },
                        },
                    },
                },
            },
        });
        return [restaurant];
    });

    app.get("/restaurants/:query", async (req) => {
        const schema = z.object({
            query: z.string(),
        });

        const { query } = schema.parse(req.params);
        const restaurants = await prisma.restaurant.findMany();

        return restaurants.map((item) => item.name.includes(query));
    });
    app.get("/filteredRestaurants/:gastronomy", async (req, reply) => {
        const schema = z.object({
            gastronomy: z.string(),
        });
        const { gastronomy } = schema.parse(req.params);

        const gastronomies = await prisma.gastronomy.findMany({
            where: {
                description: gastronomy,
            },
        });

        if (!gastronomies) return reply.status(500).send();

        const restaurant = await prisma.restaurant.findMany({
            where: {
                gastronomyId: gastronomies[0].id,
            },
            select: {
                id: true,
                name: true,
                about: true,
                pictures: true,
                highlights: true,
                max_guests: true,
                latitude: true,
                longitude: true,
                opening_time: true,
                closing_time: true,
                Gastronomy: {
                    select: {
                        description: true,
                    },
                },
            },
        });
        return restaurant;
    });
}
