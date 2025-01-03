'use client'
/* 
 Nesse caso, por mais que nós estejamos com uma função que dependa do clique do usuário, daria certo sem dizer que este
 componente é um componente cliente, porque o seu pai, que é o CadastroUsuario, já tem o use client nele, então todos
 componentes filhos também se tornam um.

 Mas sempre que nós tivermos um componente que precisará de recursos do lado do cliente, é importante usar o use client,
 recursos esses como todos que precisam da interação do usuário
*/

import type Usuario from '@/data/model/Usuario'
import { IconPencil, IconTrash } from '@tabler/icons-react'

export interface ListaUsuariosProps {
	usuarios: Usuario[]
	removerUsuario: (usuario: Usuario) => void
	selecionarUsuarioAtual: (usuario: Usuario) => void
}

export default function ListaUsuarios(
	props: ListaUsuariosProps
) {
	function renderizarUsuario(usuario: Usuario) {
		return (
			<div
				key={usuario.id}
				className="flex items-center py-3 px-6 rounded-md bg-zinc-900"
			>
				<div className="flex flex-col flex-1">
					<span className="font-semibold text-zinc-400">
						{usuario.nome}
					</span>
					<span>{usuario.email}</span>
				</div>
				<div className="flex gap-2">
					<button
						onClick={() =>
							props.selecionarUsuarioAtual(usuario)
						}
						className="botao azul"
					>
						<IconPencil />
					</button>
					<button
						onClick={() => props.removerUsuario(usuario)}
						className="botao vermelho"
					>
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
