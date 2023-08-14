import { FastifyInstance } from "fastify";
import { prisma } from "../lib/prisma";
import { z } from "zod";
import axios from "axios";
import bcrypt from "bcrypt";

export async function authRoutes(app: FastifyInstance) {
    app.post("/register", async (req, reply) => {
        const schema = z.object({
            name: z.string(),
            email: z.string().email(),
            password: z.string().min(8),
        });

        const { name, email, password } = schema.parse(req.body);
        let user = await prisma.user.findUnique({
            where: {
                email: email,
            },
        });
        if (user) return reply.status(403).send();
        let hashedPassword = await bcrypt.hash(password, 10);

        user = await prisma.user.create({
            data: {
                email,
                name,
                password: hashedPassword,
            },
        });

        const token = app.jwt.sign(
            {
                username: user?.name,
                email: user.email,
                picture: user?.image,
            },
            {
                sub: user?.id,
                expiresIn: "30 days",
            }
        );
        return reply.status(200).send({ token });
    });
    app.post("/login", async (req, reply) => {
        const schema = z.object({
            email: z.string().email(),
            password: z.string().min(8),
        });

        const { email, password } = schema.parse(req.body);

        let user = await prisma.user.findUnique({
            where: {
                email: email,
            },
            select: {
                id: true,
                name: true,
                image: true,
                password: true,
                email: true,
                wishiList: {
                    select: {
                        restaurantId: true,
                    },
                },
            },
        });
        if (!user) return reply.status(404).send();
        if (user) {
            if (!bcrypt.compareSync(password, user?.password!))
                return reply.status(401).send({ message: "Falha" });

            const token = app.jwt.sign(
                {
                    username: user.name,
                    email: user.email,
                    picture: user?.image,
                    wishList: user.wishiList,
                },
                {
                    sub: user.id,
                    expiresIn: "30 days",
                }
            );
            return reply.status(200).send({ token });
        }
    });

    app.post("/login/google", async (req, reply) => {
        const schema = z.object({
            code: z.string(),
        });
        try {
            const { code } = schema.parse(req.body);

            const response = await axios.get(
                "https://www.googleapis.com/oauth2/v3/userinfo",
                {
                    headers: {
                        Authorization: `Bearer ${code}`,
                    },
                }
            );
            const responseSchema = z.object({
                name: z.string(),
                picture: z.string(),
                email: z.string().email(),
                sub: z.string(),
            });

            const userInfo = responseSchema.parse(response.data);
            const { name, picture, email, sub } = userInfo;

            let user = await prisma.user.findUnique({
                where: {
                    email,
                },
            });
            if (!user) {
                user = await prisma.user.create({
                    data: {
                        email,
                        image: picture,
                        name,
                    },
                });
            }
            const token = app.jwt.sign(
                {
                    name: user.name,
                    image: user.image,
                },
                {
                    sub: user.id,
                    expiresIn: "30 days",
                }
            );

            return reply.status(200).send({ token });
        } catch (err) {
            return reply.status(401).send();
        }
    });
}
