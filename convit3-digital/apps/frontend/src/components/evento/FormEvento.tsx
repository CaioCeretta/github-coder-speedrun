import React from 'react'
import Passos from '../shared/Passos'
import useEvento from '@/data/hooks/useEvento'

export default function FormEvento() {
  const { salvarEvento } = useEvento()

  const labels = [
    "Identificação do Evento",
    "Local e Data",
    "Informações Finais"
  ]

  return (
    <div>
      <Passos
        labels={labels}
        labelAcao='Salvar'
        acao={salvarEvento}
        permiteProximoPasso={[true, true, false]}
      >
        <div>Passo 1</div>
        <div>Passo 2</div>
        <div>Passo 3</div>
      </Passos>

    </div>

  )
}
