import Pai from '@/components/arvore/direta/pai'
import Titulo from '@/components/template/Titulo'

export default function ComunicacaoDireta() {
	return (
		<div>
			<Titulo
				principal="Comunicação Direta"
				secundario="Exemplo de comunicação direta entre componentes"
			/>

			<Pai
				nome="José"
				sobrenome="Ceretta"
				filhos={['Caio', 'André', 'Alex']}
			/>
		</div>
	)
}
