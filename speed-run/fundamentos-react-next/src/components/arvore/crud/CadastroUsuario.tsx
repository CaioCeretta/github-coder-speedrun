'use client'

import type Usuario from '@/data/model/Usuario'
import { useState } from 'react'
import todosUsuarios from '@/data/constants/usuarios'
import ListaUsuarios from './ListaUsuarios'
import FormUsuario from './FormUsuario'

export default function CadastroUsuario() {
	const [usuarioAtual, setUsuarioAtual] =
		useState<Partial<Usuario> | null>(null)

	const [usuarios, setUsuarios] =
		useState<Usuario[]>(todosUsuarios)

	function removerUsuario(usuario: Usuario) {
		const novosUsuarios = usuarios.filter((u) => {
			return usuario.id !== u.id
		})

		setUsuarios(novosUsuarios)
	}

	function alterarUsuario(usuario: Partial<Usuario>) {
		setUsuarioAtual(usuario)
	}

	function selecionarUsuario(usuario: Partial<Usuario>) {
		setUsuarioAtual(usuario)
	}

	function cancelar() {
		setUsuarioAtual(null)
	}

	return (
		<div className="flex flex-col gap-7">
			<button
				onClick={() => selecionarUsuario({})}
				className="botao verde self-end"
			>
				Novo Usuário
			</button>

			{usuarioAtual ? (
				<FormUsuario
					usuario={usuarioAtual}
					cancelar={cancelar}
					alterarUsuario={alterarUsuario}
				/>
			) : (
				<ListaUsuarios
					selecionarUsuarioAtual={selecionarUsuario}
					removerUsuario={removerUsuario}
					usuarios={usuarios}
				/>
			)}
		</div>
	)
}
