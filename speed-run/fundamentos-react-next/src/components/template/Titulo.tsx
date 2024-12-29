interface TituloProps {
	principal: string
	secundario: string
}

export default function Titulo(props: TituloProps) {
	return (
		<div className="mb-10">
			<h2>{props.principal}</h2>
			<span>{props.secundario}</span>
		</div>
	)
}
