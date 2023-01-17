import { procedure, router } from ".."
import { z } from "zod"

const sampleRouter = router({
	hello: procedure.input(z.object({ name: z.string() })).query(({ input }) => {
		return {
			greeting: `Hello ${input.name}`
		}
	})
})

export default sampleRouter
