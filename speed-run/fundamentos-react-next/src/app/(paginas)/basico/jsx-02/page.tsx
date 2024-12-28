import React from 'react'

export default function ExercicioJSX02() {
	function renderizarCirculo(texto: string) {
		return (
			<div
				className="h-12 w-12 rounded-full bg-red-500 border border-zinc-500
      flex items-center justify-center text-sm"
			>
				{texto}
			</div>
		)
	}

	return (
		<div className="container">
			<div className="exercicio">
				<h1>Entendendo JSX #02</h1>
				<div className="conteudo">
					<div className="grid grid-cols-3 gap-5">
						{renderizarCirculo('#01')}
						{renderizarCirculo('#02')}
						{renderizarCirculo('#03')}
					</div>
				</div>
			</div>
		</div>
	)
}
