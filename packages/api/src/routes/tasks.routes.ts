import { Context } from "@api/context"
import { prisma } from "@api/server"
import { TaskDeleteOneSchema } from "@api/zod/deleteOneTask.schema"
import { TaskCreateInputObjectSchema } from "@api/zod/objects/TaskCreateInput.schema"
import { TaskWhereInputObjectSchema } from "@api/zod/objects/TaskWhereInput.schema"
import { TaskWhereUniqueInputObjectSchema } from "@api/zod/objects/TaskWhereUniqueInput.schema"

import * as trpc from "@trpc/server"

const tasksRouter = trpc
	.router<Context>()
	.mutation("create", {
		input: TaskCreateInputObjectSchema,
		resolve: async ({ input }) => {
			return await prisma.task.create({ data: input })
		}
	})
	.query("all", {
		input: TaskWhereInputObjectSchema,
		resolve: async ({ input }) => {
			return await prisma.task.findMany({ where: input })
		}
	})
	.query("get", {
		input: TaskWhereUniqueInputObjectSchema,
		resolve: async ({ input }) => {
			return await prisma.task.findUnique({
				where: input
			})
		}
	})
	.mutation("delete", {
		input: TaskDeleteOneSchema,
		resolve: async ({ input }) => {
			return await prisma.task.delete({ where: input.where })
		}
	})

export default tasksRouter
