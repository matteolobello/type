import "dotenv/config"
import { parseEnv, z } from "znv"

const Env = parseEnv(process.env, {
	PORT: z.number().int().positive()
})

export default Env
