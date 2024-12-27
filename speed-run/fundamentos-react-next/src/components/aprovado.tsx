import React from 'react'

interface AprovadoProps {
	nome: string
}

export default function Aprovado(props: AprovadoProps) {
	return (
		<div
			key={props.nome}
			className="bg-black p-3 rounded-md flex justify-between"
		>
			<span className="text-red-500" key={props.nome}>
				# {props.nome}
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
	)
}
