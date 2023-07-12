import fastify from "fastify"
import Cors from "@fastify/cors"
import { authRoutes } from "./routes/auth"

const app = fastify({
    logger: true
})

app.register(Cors, {
    origin: true
})

app.register(authRoutes)

app.listen({
    port: 3333
}).then(s => "http://localhost:3333")