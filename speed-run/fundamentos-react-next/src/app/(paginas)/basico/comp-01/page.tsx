import Aprovado from '@/components/exercicios/aprovado'
import React from 'react'

export default function CriandoComponentes01() {
	const listaDeAprovados = [
		'Caio',
		'Alex',
		'Natália',
		'Thiago',
	]

	const spans = []

	for (const nome of listaDeAprovados) {
		spans.push(<span key={nome}># {nome}</span>)
	}

	return (
		<div className="container">
			<div className="exercicio">
				<h1>Criando Componentes #01</h1>
				<div className="conteudo">
					{spans}

					<div className="flex flex-col gap-3">
						{listaDeAprovados.map((nome) => (
							<Aprovado nome={nome} key={nome} />
						))}
					</div>
				</div>
			</div>
		</div>
	)
}
