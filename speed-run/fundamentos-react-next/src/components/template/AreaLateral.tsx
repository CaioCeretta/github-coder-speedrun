import type { ReactNode } from 'react'

export interface AreaLateralProps {
	children: ReactNode
}

export default function AreaLateral(
	props: AreaLateralProps
) {
	return <aside className="p-6">{props.children}</aside>
}
