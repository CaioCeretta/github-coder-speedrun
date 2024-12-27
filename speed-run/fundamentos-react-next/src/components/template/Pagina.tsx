import React, { type ReactNode } from 'react'
import Cabecalho from './Cabecalho'

interface PaginaProps {
	children?: ReactNode
}

export default function Pagina(props: PaginaProps) {
	return (
		<div>
			<Cabecalho />
			<span>Página</span>
			<span>{props.children}</span>
		</div>
	)
}
