import { createContext } from "@api/context"
import Env from "@api/env"
import { appRouter } from "@api/routes/root.router"

import cors from "@fastify/cors"
import { PrismaClient } from "@prisma/client"
import { fastifyTRPCPlugin } from "@trpc/server/adapters/fastify"
import fastify from "fastify"

export const prisma = new PrismaClient()

const server = fastify({
	maxParamLength: 5000
})

server.register(cors)

server.register(fastifyTRPCPlugin, {
	prefix: "/trpc",
	trpcOptions: { router: appRouter, createContext }
})

server
	.listen({ port: Env.PORT })
	.then((address) => console.log("🚀 Server is now running", address))
