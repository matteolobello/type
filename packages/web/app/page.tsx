"use client"

import { trpc } from "../client/trpc-client"

export default function HomePage() {
	const { data } = trpc.sample.hello.useQuery({ name: "world" })

	return (
		<div className="p-4">
			<h1 className="text-3xl text-black">TYPE – Next.js</h1>
			<h3>Data from API: {data?.greeting ?? "..."}</h3>
		</div>
	)
}
