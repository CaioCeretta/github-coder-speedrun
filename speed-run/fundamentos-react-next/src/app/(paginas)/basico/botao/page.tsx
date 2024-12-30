'use client'

import Titulo from '@/components/template/Titulo'

export default function ExemploBotao() {
	function executar() {
		alert('A função foi invocada')
	}

	function executarComParametro(nome: string) {
		alert(`A função ${nome} foi executada`)
	}

	return (
		<div>
			<Titulo
				principal="Usando Botão"
				secundario="Como utilizar botão com o react"
			/>
			<div className="flex gap-6">
				{/* 
					Essa diferença se dá na forma que o react interpreta essas expressões e no momento em que a função é executada.

					se chamassemos apenas onClick={executarComParametro('teste)}, quando escrevemos desta maneira, a função é executada
					imediatamente durante a renderização do componente. Isso acontece porque estamos chamando a função diretamente,
					e o resultado da função é o que será atribuido ao evento onClick

					então desta forma, antes mesmo do botão ser clicado, o que será atribuido ao onClick não será a função executar,
					mas sim, o retorno da chamada da função executar.

					No caso de {() => executarComParametro('teste)}, estamos passando uma função anônima que será executada apenas
					quando o botão for clicado, ou seja, apenas quando o onClick ocorrer. Daí neste caso o onClick está recebendo
					uma função com esse nome, garantindo que será executada apenas no momento do clique
				*/}
				<button onClick={executar} className="botao">
					Executar
				</button>

				<button
					onClick={() => executarComParametro('teste')}
					className="botao"
				>
					Executar Parâmetro
				</button>
			</div>
		</div>
	)
}
