import type { ReactNode } from 'react'

export default function Layout(props: {
	children: ReactNode
}) {
	return <div className="">{props.children}</div>
}
