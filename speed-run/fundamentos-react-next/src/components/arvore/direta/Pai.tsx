import Filho from './Filho'

export interface PaiProps {
	nome: string
	sobrenome: string
	filhos: string[]
}

export default function Pai(props: PaiProps) {
	return (
		<div>
			<h3 className="text-xl font-semibold">
				Pai: {props.nome} {props.sobrenome}
			</h3>
			<div className="py-6">
				<span className="text-zinc-500 py-2.5 text-lg underline">
					Lista de Filhos
				</span>
				{props.filhos.map((nome, i) => (
					<Filho
						key={i}
						nome={nome}
						sobrenome={props.sobrenome}
					/>
				))}

				{/* <Filho nome="André" sobrenome="Ceretta" />
				<Filho nome="Alex" sobrenome="Ceretta" />
				<Filho nome="Caio" sobrenome="Ceretta" /> */}

				{/* If the properties of the child component, are the same as the received by the parent component as props, we
				can use a shorthand like this.
				<Filho {...props} /> */}
			</div>
		</div>
	)
}
