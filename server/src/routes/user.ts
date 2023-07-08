import {FastifyInstance} from "fastify"
import { prisma } from "../lib/prisma"
export async function userRoutes(app: FastifyInstance){
    app.get("/user", async ()=> {
        const user = await prisma.user.findMany()


        return user
    })
}