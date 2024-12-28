import Pagina from '@/components/template/Pagina'
import type { ReactNode } from 'react'

export default function Layout(props: {
	children: ReactNode
}) {
	return <Pagina>{props.children}</Pagina>
}
