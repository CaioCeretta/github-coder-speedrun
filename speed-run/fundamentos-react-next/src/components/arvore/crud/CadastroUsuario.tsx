'use client'

import type Usuario from '@/data/model/Usuario'
import { useState } from 'react'
import todosUsuarios from '@/data/constants/usuarios'
import ListaUsuarios from './ListaUsuarios'

export default function CadastroUsuario() {
	const [usuarios, setUsuarios] =
		useState<Usuario[]>(todosUsuarios)

	function removerUsuario(usuario: Usuario) {
		const novosUsuarios = usuarios.filter((u) => {
			return usuario.id !== u.id
		})

		setUsuarios(novosUsuarios)
	}

	return (
		<div className="flex flex-col gap-7">
			<ListaUsuarios
				usuarios={usuarios}
				removerUsuario={removerUsuario}
			/>
		</div>
	)
}
