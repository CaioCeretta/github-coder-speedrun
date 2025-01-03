'use client'

import type Usuario from '@/data/model/Usuario'
import { IconPencil, IconTrash } from '@tabler/icons-react'

export interface ListaUsuariosProps {
	usuarios: Usuario[]
}

export default function ListaUsuarios(
	props: ListaUsuariosProps
) {
	return (
		<div>
			<table className="table-auto w-100 border-separate border-spacing-y-2">
				<thead>
					<tr className="bg-gray-100 text-zinc-600">
						<th className="p-4 text-justify border-b border-gray-300 text-sm">
							ID
						</th>
						<th className="p-4 text-justify border-b border-gray-300 text-sm">
							Nome
						</th>
						<th className="p-4 text-justify border-b border-gray-300 text-sm">
							Email
						</th>
						<th className="p-4 text-justify border-b border-gray-300 text-sm">
							Senha
						</th>
						<th className="p-4 text-justify border-b border-gray-300 text-sm">
							Ações
						</th>
					</tr>
				</thead>
				<tbody>
					{props.usuarios.map((usuario) => (
						<tr className="" key={usuario.id}>
							<td className="p-4 text-zinc-300 border-b border-gray-300">
								{usuario.id}
							</td>
							<td className="p-4 text-zinc-300 border-b border-gray-300">
								{usuario.nome}
							</td>
							<td className="p-4 text-zinc-300 border-b border-gray-300">
								{usuario.email}
							</td>
							<td className="p-4 text-zinc-300 border-b border-gray-300">
								XXXXXX
							</td>
							<td
								className="p-4 text-sm text-zinc-500 border-b border-gray-300
    flex gap-2 justify-start space-x-2 items-center"
							>
								<button className="botao azul">
									<IconPencil />
								</button>
								<button className="botao vermelho">
									<IconTrash />
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
}
