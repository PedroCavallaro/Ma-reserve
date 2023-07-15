import fastify from "fastify"
import Cors from "@fastify/cors"
import { authRoutes } from "./routes/auth"
import jwt from "@fastify/jwt"
import { filterRoutes } from "./routes/filters"
import { restaurantRoutes } from "./routes/restaurant"

const app = fastify({
    logger: true
})

app.register(Cors, {
    origin: true
})
app.register(jwt,{
    secret: "sa-jdfkowrpesrkioef9-wengqwoeemdqwoed_ODwqokq302k12=*ASKdnaksdlAMSkdmaslkmdçasmd....qwe"
} )
app.register(authRoutes)
app.register(filterRoutes)
app.register(restaurantRoutes)

app.listen({
    port: 3333
}).then(s => "http://localhost:3333")