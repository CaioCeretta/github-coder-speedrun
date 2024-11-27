import { Evento } from 'core';
import { createContext, useState } from "react";

interface ContextoEventosProps {
  evento: Evento | null
  eventos: Evento[]

  selecionarEvento(id: string): void;
  excluirEvento(id: string): void
  adicionarEventoViaQrCode(qrcode: string): void;
}

export const ContextoEventos = createContext<ContextoEventosProps>({} as ContextoEventosProps)

export function ProvedorEventos(props: any) {
  const [evento, setEvento] = useState<Evento | null>(null)
  const [eventos, setEventos] = useState<Evento[]>([])
  
  // const [qrCode, setQrCode] = useState<
  function selecionarEvento(id: string) {
    const evento = eventos.find(e => e.id === id);

    setEvento(evento || null)
  } 

  function adicionarEventoViaQrCode(qrcode: string) {
    // Implementar
  }

  function excluirEvento(id: string) {
    const novosEventos = eventos.filter(e => e.id !== id);

    setEventos(novosEventos)
  }

  return (
    <ContextoEventos.Provider value={{
      evento,
      eventos,
      selecionarEvento,
      excluirEvento,
      adicionarEventoViaQrCode
    }}>
      {props.children}
    </ContextoEventos.Provider>
  )
}