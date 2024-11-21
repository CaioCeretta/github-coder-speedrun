import type { Evento } from "@/core"
import InformacoesEventos from "./InformacoesEvento"

export interface DashboardEventoProps {
  evento: Evento
}

export default function DashboardEvento (props: DashboardEventoProps) {
  return (
    <div>
      <div>
      <InformacoesEventos evento={props.evento} />
      </div>
    </div>
  )
}