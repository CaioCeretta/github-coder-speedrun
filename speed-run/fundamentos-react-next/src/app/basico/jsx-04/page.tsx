import React from 'react'

export default function ExercicioJSX03() {
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
				<h1>Entendendo JSX #04</h1>
				<div className="conteudo">
					{spans}

					<div className="flex flex-col gap-3">
						{listaDeAprovados.map((nome) => (
							<div
								key={nome}
								className="bg-black p-3 rounded-md flex justify-between"
							>
								<span className="text-red-500" key={nome}>
									# {nome}
								</span>
								<div className="flex gap-2">
									<button className="bg-blue-500 p-2 rounded-md text-sm">
										Editar
									</button>

									<button className="bg-red-500 p-2 rounded-md text-sm">
										Excluir
									</button>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}
