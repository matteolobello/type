import tasksRouter from "@api/routes/tasks.routes"

import * as trpc from "@trpc/server"

export const appRouter = trpc.router().merge("tasks.", tasksRouter)

export type AppRouter = typeof appRouter
