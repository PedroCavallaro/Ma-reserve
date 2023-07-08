import fastify from "fastify"
import Cors from "@fastify/cors"
import { userRoutes } from "./routes/user"

const app = fastify({
    logger: true
})

app.register(Cors, {
    origin: true
})

app.register(userRoutes)

app.listen({
    port: 3333
}).then(s => "http://localhost:3333")