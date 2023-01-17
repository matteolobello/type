import { appRouter } from "../trpc/routes"
import cors from "@fastify/cors"
import { fastifyTRPCPlugin } from "@trpc/server/adapters/fastify"
import Env from "api/env"
import { createContext } from "api/trpc/context"
import fastify from "fastify"

const server = fastify({
	maxParamLength: 5000
})

server.register(cors)

server.register(fastifyTRPCPlugin, {
	prefix: "/trpc",
	trpcOptions: { router: appRouter, createContext }
})

server
	.listen({ host: "0.0.0.0", port: Env.PORT })
	.then((address) => console.log("🚀 Server is now running", address))
