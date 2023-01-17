import sampleRouter from "./sample.router"
import { router } from "api/trpc"

export const appRouter = router({
	sample: sampleRouter
})

export type AppRouter = typeof appRouter
