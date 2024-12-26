import React from 'react'

export default function ExercicioJSX01() {
	const titulo = (
		<h1 className="text-2xl font-black">
			Entendendo o JSX #01
		</h1>
	)

	return (
		<div className="container">
			<div className="exercicio">
				{titulo}
				<div className="conteudo">
					<span className="text-zinc-500">{7 * 7}</span>
					<span>{Math.random()}</span>
				</div>
			</div>
		</div>
	)
}
