import CadastroUsuario from '@/components/arvore/crud/CadastroUsuario'
import Titulo from '@/components/template/Titulo'
import React from 'react'

export default function Cadastro() {
	return (
		<div className="flex flex-col gap-7">
			<Titulo
				principal="Cadastro de Usuários"
				secundario="Criação,  alteração, consultas e exclusão de usuários"
			/>

			<CadastroUsuario />
		</div>
	)
}
