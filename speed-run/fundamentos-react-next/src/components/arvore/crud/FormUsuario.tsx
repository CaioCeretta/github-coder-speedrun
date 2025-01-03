import type Usuario from '@/data/model/Usuario'
import React from 'react'

interface FormUsuarioProps {
	usuario: Partial<Usuario>
	alterarUsuario: (usuario: Partial<Usuario>) => void
	cancelar: () => void
	salvar: () => void
}

export default function FormUsuario(
	props: FormUsuarioProps
) {
	const { salvar, usuario, alterarUsuario, cancelar } =
		props

	return (
		<div className="flex flex-col gap-4">
			<div className="flex flex-col gap-1">
				<span>Nome:</span>
				<input
					value={usuario.nome ?? ''}
					className="input"
					onChange={(e) =>
						props.alterarUsuario({
							...usuario,
							nome: e.target.value,
						})
					}
					type="text"
				/>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
				<div className="flex flex-col gap-1">
					<span>Email:</span>
					<input
						value={usuario.email ?? ''}
						onChange={(e) =>
							alterarUsuario({
								...usuario,
								email: e.target.value,
							})
						}
						className="input"
						type="text"
					/>
				</div>

				<div className="flex flex-col gap-1">
					<span>Senha:</span>
					<input
						value={usuario.senha ?? ''}
						onChange={(e) =>
							alterarUsuario({
								...usuario,
								senha: e.target.value,
							})
						}
						className="input"
						type="password"
					/>
				</div>
			</div>

			<div className="flex justify-center gap-2">
				<button className="botao azul" onClick={salvar}>
					Salvar
				</button>
				<button className="botao cinza" onClick={cancelar}>
					Cancelar
				</button>
			</div>
		</div>
	)
}
