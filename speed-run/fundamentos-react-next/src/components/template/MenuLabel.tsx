import type { ReactNode } from 'react'

export interface MenuLabelProps {
	children: ReactNode
}

export default function MenuLabel(props: MenuLabelProps) {
	return (
		<span className="text-xs uppercase text-zinc-500 p-4">
			{props.children}
		</span>
	)
}
