import { prismaClient } from "../prisma/client"
import { inferAsyncReturnType } from "@trpc/server"
import { CreateFastifyContextOptions } from "@trpc/server/adapters/fastify"

export const createContext = ({ req, res }: CreateFastifyContextOptions) => {
	return {
		req,
		res,
		prisma: prismaClient
	}
}

export type Context = inferAsyncReturnType<typeof createContext>
