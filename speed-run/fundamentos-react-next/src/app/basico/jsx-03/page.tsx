import React from 'react'

export default function ExercicioJSX03() {
	const numero = 14

	const numeroPar = numero % 2 === 0

	function renderizarParOuImpar(numero: number) {
		if (numero % 2 === 0) {
			return <span className="text-green-500">Par</span>
		} else {
			return <span className="text-red-500">Impar</span>
		}
	}

	return (
		<div className="container">
			<div className="exercicio">
				<h1>Entendendo JSX #03</h1>
				<div className="conteudo">
					{numeroPar ? (
						<span className="text-green-500">Par</span>
					) : (
						<span className="text-red-500">Impar</span>
					)}

					{numeroPar && (
						<span>
							O resto da divisão por 2 é igual a zero
						</span>
					)}

					{renderizarParOuImpar(numero)}
				</div>
			</div>
		</div>
	)
}
