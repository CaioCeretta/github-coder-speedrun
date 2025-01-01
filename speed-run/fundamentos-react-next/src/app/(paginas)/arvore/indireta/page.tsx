import Pai from '@/components/arvore/indireta/Pai'
import Titulo from '@/components/template/Titulo'

export default function ComunicaçãoIndireta() {
	return (
		<div>
			<Titulo
				principal="Comunicação Indireta"
				secundario="Exemplo de comunicação indireta entre componentes"
			/>

			<div className="">
				<Pai />
			</div>
		</div>
	)
}
