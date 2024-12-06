import React from 'react'
import Passos from '../shared/Passos'
import useEvento from '@/data/hooks/useEvento'
import CampoEntrada from '../shared/CampoEntrada'
import { Alias, Data } from 'core'

export default function FormEvento() {
  const { evento, salvarEvento, aliasValido, alterarEvento } = useEvento()

  const labels = [
    "Identificação do Evento",
    "Local e Data",
    "Informações Finais"
  ]

  const permiteProximoPasso: boolean[] = [
    !!evento.alias && !!evento.nome && aliasValido,
    !!evento.data && !!evento.local,
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
        <div className='flex flex-col gap-5'>
          <CampoEntrada
            descricao='Identificador único e exclusivo para o evento (usado na URL)'
            label='Identificador'
            observacao='O identificador não pode ser alterado'
            value={Alias.formatar(evento.alias ?? '')}
            erro={aliasValido ? "" : "Identificador já está em uso"}
            onChange={(e) => alterarEvento({...evento, alias: e.target.value})}
          />
          <CampoEntrada
            descricao='Nome do evento (ex.: "Festa de aniversário do João")'
            label='Nome'
            value={evento.nome ?? ''}
            onChange={(e) => alterarEvento({...evento, nome: e.target.value})}
          />
        </div>
        <div className='flex flex-col gap-5'>
          <CampoEntrada
            label='Data'
            descricao='Data e hora em que o evento ocorrerá'
            value={Data.formatar(evento.data ?? new Date())}
            onChange={(e) => alterarEvento({...evento, data: Data.desformatar(e.target.value)})}
            type='datetime-local'
          />
          <CampoEntrada
            label="Local"
            descricao="Local onde o evento será realizado"
            value={evento.local ?? ""}
            onChange={(e) => {
              return (
                alterarEvento({
                  ...evento,
                  local: e.target.value
                })
              )
            }}
            />
        </div>
        <div className='flex flex-col gap-5'>
          <CampoEntrada
            label='Data'
            descricao='Identificador único e exclusivo para o evento (usado na URL)'
            observacao='O identificador não pode ser alterado'
            value={Alias.formatar(evento.alias ?? '')}
            erro={aliasValido ? "" : "Identificador já está em uso"}
            onChange={(e) => alterarEvento({...evento, alias: e.target.value})}
          />
          <CampoEntrada
            descricao='Nome do evento (ex.: "Festa de aniversário do João")'
            label='Nome'
            value={evento.nome ?? ''}
            onChange={(e) => alterarEvento({...evento, nome: e.target.value})}
          />
        </div>
      </Passos>

    </div>

  )
}
