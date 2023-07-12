import {FastifyInstance} from "fastify"
import { prisma } from "../lib/prisma"
import {z} from "zod"
import axios from "axios"
import bcrypt from "bcrypt"

export async function authRoutes(app: FastifyInstance){
    app.post("/register", async (req, reply)=>{
        const schema = z.object({
            username: z.string(),
            email: z.string().email(),
            password: z.string().min(8)
        }) 

        const {username, email, password} = schema.parse(req.body)

        let user = await prisma.user.findUnique({
            where: {
                email: email
            }
        })

        
        bcrypt.hash(password, 10, async (error, hash)=>{
            if(error) return reply.status(500).send()
            console.log(hash + "ABCD")
            
            if(!user){
                const newUser = await prisma.user.create({
                        data: {
                            email,
                            name: username,
                            password: hash
                        }
                })
            return reply.status(201).send(newUser)
        }
        })
    })
    app.post("/login", async (req, reply)=> {
        const schema = z.object({
            email: z.string().email(),
            password: z.string().min(8)
        }) 

        const {email, password} = schema.parse(req.body)
        
        let user = await prisma.user.findUnique({
            where: {
                email: email
            }
        })
      
        if(user){ 
           if(bcrypt.compareSync(password, user?.password!) ){      
                const token = app.jwt.sign({
                    username: user?.name,
                    picture: user?.image
                }, 
                {
                    sub: user?.id,
                    expiresIn: "30 days"
                })
                return reply.status(200).send({token})           
            }else{
                return reply.status(401).send({message: "Falha"})
            }
        }
    })


    app.post("/login/google", async (req, reply)=>{
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