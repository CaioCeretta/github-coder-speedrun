import {
	IconArrowDown,
	IconArrowUp,
	IconCode,
	IconComponents,
	IconFunction,
	IconHome,
	IconNumbers,
	IconSquare1,
	IconUsers,
} from '@tabler/icons-react'
import { type ReactNode } from 'react'
import AreaLateral from './AreaLateral'
import Cabecalho from './Cabecalho'
import Menu from './Menu'
import MenuItem from './MenuItem'
import MenuLabel from './MenuLabel'
import Rodape from './Rodape'

interface PaginaProps {
	children?: ReactNode
}

export default function Pagina(props: PaginaProps) {
	return (
		<div className="flex flex-col min-h-screen">
			<Cabecalho />
			<div className="flex flex-1">
				<AreaLateral>
					<Menu>
						<MenuLabel>Componentes</MenuLabel>
						<MenuItem
							icone={IconHome}
							link="/"
							texto="Inicio"
						/>
						<MenuItem
							icone={IconSquare1}
							link="/basico/primeiro"
							texto="Primeiro"
						/>
						<MenuItem
							icone={IconFunction}
							link="/basico/botao"
							texto="Botao #01"
						/>
						<MenuItem
							icone={IconCode}
							link="/basico/jsx-01"
							texto="JSX #01"
						/>
						<MenuItem
							icone={IconCode}
							link="/basico/"
							texto="JSX #02"
						/>
						<MenuItem
							icone={IconCode}
							link="/basico/"
							texto="JSX #03"
						/>
						<MenuItem
							icone={IconCode}
							link="/basico/"
							texto="JSX #04"
						/>
						<MenuItem
							icone={IconComponents}
							link="/basico/comp-01"
							texto="Componentes #01"
						/>
						<MenuItem
							icone={IconComponents}
							link="/basico/comp-02"
							texto="Componentes #02"
						/>
						<MenuLabel>Gerenciamento de Estados</MenuLabel>
						<MenuItem
							icone={IconNumbers}
							link="/estado/basico-01"
							texto="Usando Estado #01"
						/>

						<MenuLabel>Árvore de Componentes</MenuLabel>
						<MenuItem
							icone={IconArrowDown}
							link="/arvore/direta"
							texto="Comunicação Direta"
						/>

						<MenuItem
							icone={IconArrowUp}
							link="/arvore/indireta"
							texto="Comunicação Indireta"
						/>

						<MenuItem
							icone={IconUsers}
							link="/arvore/crud"
							texto="Cadastro de Usuário - CRUD"
						/>
					</Menu>
				</AreaLateral>
				<main className="p-6 flex-1">{props.children}</main>
			</div>
			<Rodape />
		</div>
	)
}
