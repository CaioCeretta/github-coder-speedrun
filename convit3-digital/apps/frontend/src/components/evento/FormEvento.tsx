import React from 'react'
import Passos from '../shared/Passos'
import useEvento from '@/data/hooks/useEvento'

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
        <div>Passo 1</div>
        <div>Passo 2</div>
        <div>Passo 3</div>
      </Passos>

    </div>

  )
}
