import Menu from '@/components/template/Menu'
import type { ReactNode } from 'react'

export default function Layout(props: {
	children: ReactNode
}) {
	return (
		<div className="flex h-screen">
			<aside className="bg-zinc-900 w-72">
				<Menu />
			</aside>
			<main className="p-10">{props.children}</main>
		</div>
	)
}
