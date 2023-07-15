import { FastifyInstance } from "fastify";
import { prisma } from "../lib/prisma";

export async function filterRoutes(app: FastifyInstance){
    app.get("/gastronomy", async ()=>{
        const filters = await prisma.gastronomy.findMany({
            select:{
                description: true
            }
        })

        return filters
    })

}