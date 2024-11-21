import type { Evento } from "@/core"

export interface InformacoesEventosProps {
  evento: Evento
}

export default function InformacoesEventos (props: InformacoesEventosProps) {
  return (
    <div>
      <span>Informações Evento {props.evento.nome}</span>
    </div>
  )
}