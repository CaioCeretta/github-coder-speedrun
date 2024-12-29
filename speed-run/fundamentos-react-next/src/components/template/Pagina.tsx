import {
	IconArrowDown,
	IconCode,
	IconComponents,
	IconHome,
	IconSquare1,
} from '@tabler/icons-react'
import { type ReactNode } from 'react'
import AreaLateral from './AreaLateral'
import Cabecalho from './Cabecalho'
import Menu from './Menu'
import MenuItem from './MenuItem'
import Rodape from './Rodape'
import MenuLabel from './MenuLabel'

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
						<MenuLabel>Árvore de Componentes</MenuLabel>
						<MenuItem
							icone={IconArrowDown}
							link="/arvore/direta"
							texto="Comunicação Direta"
						/>
					</Menu>
				</AreaLateral>
				<main className="p-6 flex-1">{props.children}</main>
			</div>
			<Rodape />
		</div>
	)
}
