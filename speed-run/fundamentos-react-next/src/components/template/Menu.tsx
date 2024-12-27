import type { ReactNode } from 'react'

export interface MenuProps {
	children: ReactNode
}

export default function Menu(props: MenuProps) {
	return (
		<nav className="flex flex-col">{props.children}</nav>
	)
}
