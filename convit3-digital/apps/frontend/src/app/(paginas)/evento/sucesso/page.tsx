'use client'

import InformacoesEvento from '@/components/evento/InformacoesEvento'
import Janela from '@/components/shared/Janela'
import useEvento from '@/data/hooks/useEvento'
import type { Evento } from 'core'
import React from 'react'

function EventoSucesso() {
  const { evento } = useEvento()

  

  return evento ? (
    <Janela
      label='Seu evento foi criado: '
      titulo={evento.nome}
      imagem={evento.imagem}
      background={evento.imagemBackground}
    >
      <InformacoesEvento
        evento={evento as Evento}
        esconderNome={true}
      />

    </Janela>
  ) : null
}

export default EventoSucesso