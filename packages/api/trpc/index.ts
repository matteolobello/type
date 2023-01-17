import { initTRPC } from "@trpc/server"
import { Context } from "api/trpc/context"

export const { router, procedure } = initTRPC.context<Context>().create()
