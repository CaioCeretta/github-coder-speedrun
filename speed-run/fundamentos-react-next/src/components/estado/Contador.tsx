'use client'

import { IconMinus, IconPlus } from '@tabler/icons-react'
import { useState } from 'react'

export interface ContadorProps {
	valorInicial?: number
}

export default function Contador(props: ContadorProps) {
	/* 
		Primeiramente, estamos fazendo de uma maneira em que criamos uma variável numero, estamos atribuindo o valor 0 e
		incrementando e decrementando ele com uma função de somar o numero++ e outra de subtrair o numero---. Se nós colocassemos
		um alerta após cada alteração, nós poderiamos ver que o valor da variavel está mudando mas não está alterando nada
		para o usuário.

		Podemos ver que a variável possui um estado interno, onde estamos controlando o valor dentro do componente


	*/

	// let numero = 0

	const [numero, setNumero] = useState<number>(
		props.valorInicial ?? 0
	)

	function incrementarNumero() {
		// numero++
		setNumero((prev) => prev + 1)
	}

	function decrementarNumero() {
		setNumero((prev) => prev - 1)
	}

	return (
		<div>
			<h2 className="text-xl font-bold text-center">
				Contador
			</h2>
			<div className="flex flex-col items-center">
				<span className="text-6xl font-semibold">
					{numero} {/* Exibindo */}
				</span>
				<div className="flex gap-3">
					<button onClick={incrementarNumero}>
						<IconPlus />/
					</button>
					<button onClick={decrementarNumero}>
						<IconMinus />
					</button>
				</div>
			</div>
		</div>
	)
}
