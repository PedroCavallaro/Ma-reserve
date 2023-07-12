import {FastifyInstance} from "fastify"
import { prisma } from "../lib/prisma"
import {z} from "zod"
import axios from "axios"
import bcrypt from "bcrypt"

export async function authRoutes(app: FastifyInstance){
    app.post("/user", async (req, reply)=> {
        const schema = z.object({
            username: z.string(),
            password: z.string().min(8)
        }) 

        const {username, password} = schema.parse(req.body)
        bcrypt.hash(password, 10, async (error, hash)=>{
            if(error) return reply.status(500).send()

            const user = await prisma.user.create({
                data: {
                    name: username,
                    password: hash
                }
            })
        })

    })

    app.post("/user/google", async (req, reply)=>{
        const schema =   z.object({
            code: z.string()
        }) 
        try{
            const {code} = schema.parse(req.body) 
            console.log(code)
    
            const response = await axios.get(
                "https://www.googleapis.com/oauth2/v3/userinfo",{
                    headers: {
                        "Authorization": `Bearer ${code}`
                    }
                }
            )
        
            return response.data
        
        }catch(err){
          
            return reply.status(401).send()
        
        }

    })
}