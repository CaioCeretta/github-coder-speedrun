'use client'

import { useState } from 'react'

import React from 'react'
import Filho from './Filho'

export default function Pai() {
	const [resposta, setResposta] = useState('???')

	/*

	ou também pode ser feito dessa maneira, porém aqui não teria um estado para dar um refresh na pagina ao ser alterado
	let resp = '' 
	
	
	

	function receberResposta(resposta: string): void {
		alert(resposta)
		resp = resposta
	}

	*/

	return (
		<div className="">
			<span className="text-3xl font-bold">
				Quem descobriu o Brasil?
			</span>
			<div className="flex gap-2 text-lg">
				<span className="text-zinc-500">Resposta: </span>
				<span className="font-semibold">
					Valor obtido do componente filho
				</span>
			</div>
			<div className="py-7">
				<Filho
					onSelectResposta={setResposta}
					opcoes={[
						'Pedro Álvares Cabral',
						'Indíos',
						'Colombo',
					]}
				/>
			</div>

			<p>A resposta do usuário foi {resposta}</p>
		</div>
	)
}
