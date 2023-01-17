import "dotenv/config"
import { parseEnv, z } from "znv"

const Env = parseEnv(process.env, {
	PORT: z.number().int().positive(),
	SECRET_JWT_CODE: z.string()
})

export default Env
