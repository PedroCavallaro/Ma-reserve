import { FastifyInstance } from "fastify";
import { prisma } from "../lib/prisma";
import {z} from "zod"
// function getDistance(lat1: number, lon1: number, lat2: number, lon2: number) {
//     // Converter graus para radianos
//     lat1 = toRadians(lat1);
//     lon1 = toRadians(lon1);
//     lat2 = toRadians(lat2);
//     lon2 = toRadians(lon2);
  
//     // Raio médio da Terra em metros
//     const raioTerra = 6371 * 1000; // Aproximadamente 6371 km

//     const difLat = lat2 - lat1;
//     const difLon = lon2 - lon1;
  
//     const a = Math.sin(difLat / 2) ** 2 + Math.cos(lat1) * Math.cos(lat2) * Math.sin(difLon / 2) ** 2;
//     const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
//     const distancia = raioTerra * c;
  
//     return distancia;
//   }
  
//   function toRadians(graus) {
//     return graus * (Math.PI / 180);
//   }
  
export async function restaurantRoutes(app: FastifyInstance){
    app.get("/restaurants", async ()=>{
        const restaurants = await prisma.restaurant.findMany({
            select:{
                id: true,
                name: true,
                about: true,
                pictures: true,
                highlights: true,
                max_guests: true,
                latitude: true,
                longitude: true,
                opening_time:true,
                closing_time: true,
                Gastronomy:{
                    select:{
                        description: true
                    }
                },
                Comments:{
                    select:{
                        comment: true,
                    }
                }
            }
        })

        return restaurants
    })
    app.get("/restaurants/:id", async (req)=>{
        const schema = z.object({
            id: z.string().uuid()
        })

        const {id} = schema.parse(req.params)

        const restaurant = await prisma.restaurant.findUnique({
            where:{
                id,
            },
            select:{
                id: true,
                name: true,
                about: true,
                pictures: true,
                highlights: true,
                max_guests: true,
                latitude: true,
                longitude: true,
                opening_time:true,
                closing_time: true,
                Gastronomy:{
                    select:{
                        description: true
                    }
                },
                Comments:{
                    select:{
                        comment: true,
                        User:{
                            select:{
                                name:true,
                                image: true
                            }
                        },
                    } 
                },
                Menu: {
                    select: {
                        description: true,
                        price: true,
                        pictures: true,
                    }
                }
            }
        })
        return [restaurant]
    })
}
