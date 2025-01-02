'use client'

import type Usuario from '@/data/model/Usuario'
import { IconPencil, IconX } from '@tabler/icons-react'

export interface ListaUsuariosProps {
	usuarios: Usuario[]
}

export default function ListaUsuarios(
	props: ListaUsuariosProps
) {
	return (
		<div>
			<table className="w-100 border-separate border-spacing-y-2">
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
							<td className="p-4 text-sm text-zinc-500 border-b border-gray-300">
								{usuario.id}
							</td>
							<td className="p-4 text-sm text-zinc-500 border-b border-gray-300">
								{usuario.nome}
							</td>
							<td className="p-4 text-sm text-zinc-500 border-b border-gray-300">
								{usuario.email}
							</td>
							<td className="p-4 text-sm text-zinc-500 border-b border-gray-300">
								XXXXXX
							</td>
							<td
								className="p-4 text-sm text-zinc-500 border-b border-gray-300
    flex justify-start space-x-2 items-center"
							>
								<IconPencil className="h-[5rem] w-8" />
								<IconX className="h-[5rem] w-8" />
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
}
