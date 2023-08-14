import fastify from "fastify";
import Cors from "@fastify/cors";
import { authRoutes } from "./routes/auth";
import jwt from "@fastify/jwt";
import { filterRoutes } from "./routes/filters";
import { restaurantRoutes } from "./routes/restaurant";
import { whishlistRoutes } from "./routes/wishlist";

const app = fastify({
    logger: true,
});

app.register(Cors, {
    origin: true,
});

app.register(jwt, {
    secret: `${process.env.JWT_SECRET}`,
});
app.register(authRoutes);
app.register(filterRoutes);
app.register(restaurantRoutes);
app.register(whishlistRoutes);
app.listen({
    port: 3333,
}).then((s) => "http://localhost:3333");
