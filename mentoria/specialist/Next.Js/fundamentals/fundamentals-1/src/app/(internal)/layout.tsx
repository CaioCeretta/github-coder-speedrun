import type { ReactNode } from 'react'

export default function Layout(props: {
	children: ReactNode
}) {
	return (
		<div className="flex h-screen">
			<aside className="bg-zinc-900 w-72">Sidebar</aside>
			<main className="">{props.children}</main>
		</div>
	)
}
