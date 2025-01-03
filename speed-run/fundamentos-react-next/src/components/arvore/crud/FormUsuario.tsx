import type Usuario from '@/data/model/Usuario'
import React from 'react'

interface FormUsuarioProps {
	usuario: Partial<Usuario>
}

export default function FormUsuario(
	props: FormUsuarioProps
) {
	return (
		<div className="flex flex-col gap-4">
			<div className="flex flex-col gap-1">
				<span>Nome:</span>
				<input
					value={props.usuario.nome}
					className="input"
					type="text"
				/>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
				<div className="flex flex-col gap-1">
					<span>Email:</span>
					<input
						value={props.usuario.email}
						className="input"
						type="text"
					/>
				</div>

				<div className="flex flex-col gap-1">
					<span>Senha:</span>
					<input
						value={props.usuario.senha}
						className="input"
						type="password"
					/>
				</div>
			</div>

			<div className="flex justify-center gap-2">
				<button className="botao azul">Salvar</button>
				<button className="botao cinza">Cancelar</button>
			</div>
		</div>
	)
}
