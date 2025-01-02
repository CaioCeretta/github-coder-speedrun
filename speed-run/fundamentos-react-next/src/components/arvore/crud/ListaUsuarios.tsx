'use client'

import type Usuario from '@/data/model/Usuario'
import { IconPencil, IconTrash } from '@tabler/icons-react'

export interface ListaUsuariosProps {
	usuarios: Usuario[]
}

export default function ListaUsuarios(
	props: ListaUsuariosProps
) {
	function renderizarUsuario(usuario: Usuario) {
		return (
			<div className="flex items-center py-3 px-6 rounded-md bg-zinc-900">
				<div className="flex flex-col flex-1">
					<span className="font-semibold text-zinc-400">
						{usuario.nome}
					</span>
					<span>{usuario.email}</span>
				</div>
				<div className="flex gap-2">
					<button className="botao azul">
						<IconPencil />
					</button>
					<button className="botao vermelho">
						<IconTrash />
					</button>
				</div>
			</div>
		)
	}

	return (
		<ul className="flex flex-col gap-2">
			{props.usuarios.map((usuario) =>
				renderizarUsuario(usuario)
			)}
		</ul>
	)
}
