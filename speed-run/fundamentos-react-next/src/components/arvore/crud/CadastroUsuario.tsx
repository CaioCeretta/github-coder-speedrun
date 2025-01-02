'use client'
import type Usuario from '@/data/model/Usuario'
import { useState } from 'react'
import todosUsuarios from '@/data/constants/usuarios'
import ListaUsuarios from './ListaUsuarios'

export default function CadastroUsuario() {
	const [usuarios, setUsuarios] =
		useState<Usuario[]>(todosUsuarios)
	return (
		<div className="flex flex-col gap-7">
			<ListaUsuarios usuarios={usuarios} />
		</div>
	)
}
