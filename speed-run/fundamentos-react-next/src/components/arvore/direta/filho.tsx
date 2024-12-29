export interface FilhoProps {
	nome: string
	sobrenome: string
}

export default function Filho(props: FilhoProps) {
	return (
		<div>
			{props.nome}{' '}
			<span className="font-semibold">
				{props.sobrenome}
			</span>
		</div>
	)
}
