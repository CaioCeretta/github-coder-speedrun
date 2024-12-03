import React from 'react'
import Passos from '../shared/Passos'
import useEvento from '@/data/hooks/useEvento'
import CamposEntrada from '../shared/CampoEntrada'

export default function FormEvento() {
  const { evento, salvarEvento, aliasValido, alterarEvento } = useEvento()

  const labels = [
    "Identificação do Evento",
    "Local e Data",
    "Informações Finais"
  ]

  const permiteProximoPasso: boolean[] = [
    !!evento.alias && !!evento.nome && aliasValido,
    false,
    false
  ]

  return (
    <div>
      <Passos
        
        labels={labels}
        labelAcao='Salvar'
        acao={salvarEvento}
        permiteProximoPasso={permiteProximoPasso}
      >
        <div>
          <CamposEntrada
            descricao='Identificador úniico e exclusivo para o evento (usado na URL)'
            label='Identificador'
            value={evento.alias ?? ''}
            onChange={(e) => alterarEvento({alias: e.target.value})}
          />
        </div>
        <div>Passo 2</div>
        <div>Passo 3</div>
      </Passos>

    </div>

  )
}
