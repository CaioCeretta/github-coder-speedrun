import React from 'react'

export interface FilhoProps {
	opcoes: string[]
	onSelectResposta: (resposta: string) => void
}

export default function Filho(props: FilhoProps) {
	return (
		<div className="flex gap-3">
			{props.opcoes.map((opcao) => (
				<button
					key={opcao}
					onClick={() => props.onSelectResposta(opcao)}
					className="botao azul"
				>
					{opcao}
				</button>
			))}
		</div>
	)
}
