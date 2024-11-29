'use client'
import { Convidado, criarConvidadoVazio, criarEventoVazio, Data, Evento } from "core";
import { createContext, useCallback, useEffect, useState} from 'react'
import useAPI from "../hooks/useAPI";
import { useRouter } from "next/router";

export interface ContextoEventoProps {
  evento: Partial<Evento>
  convidado: Partial<Convidado>
  aliasValido: boolean;

  alterarEvento(evento: Partial<Evento>): void;
  alterarConvidado(convidado: Partial<Convidado>): void;

  carregarEvento(idOuAlias: string): Promise<void>
  salvarEvento(): Promise<void>

  adicionarConvidado(): void;
  validarAlias(): void
}

/* Here we are initializing it as an empty object as any because if we did it like as ContextoEventoProps, we would have
to instantiate all these values as null, and we don't need this, we only need to inform it populated on the value of the
provider*/

const ContextoEvento = createContext<ContextoEventoProps>({} as any)

export function ProvedorContextoEvento(props: any) {
  const router = useRouter()

  const { httpPost, httpGet } = useAPI()

  const [aliasValido, setAliasValido] = useState(true)
  const [evento, setEvento] = useState<Partial<Evento>>(criarEventoVazio())
  const [convidado, setConvidado] = useState<Partial<Convidado>>(criarConvidadoVazio())

  const salvarEvento = useCallback(async function() {
    try {
      const eventoCriado = await httpPost("/eventos", evento)
      router.push(`/eventos/sucesso`)
      setEvento({
        ...eventoCriado,
        data: Data.desformatar(eventoCriado.data)
      })
    } catch(err) {
      // TODO: implmentar erro
    }
  }, [evento, httpPost])
  

  const carregarEvento = useCallback(async (idOuAlias: string) => {
    try {
    const evento = await httpGet(`/eventos/${idOuAlias}`)
      router.push(`/eventos/sucesso`)
      setEvento({
        ...evento,
        data: Data.desformatar(evento.data)
      })
    } catch(err) {
      // TODO: implmentar erro
    }

    
  }, [httpGet, setEvento])

  const adicionarConvidado = useCallback(async () => {

    await httpPost(`eventos/${evento.alias}/convidado`, convidado)
    router.push(`/convite/obrigado`)

  }, [httpPost, evento, router])

  const validarAlias = useCallback(async function() {
    try {
      const { valido } = await httpGet(`/eventos/validar/${evento.alias}/${evento.id}`)
    } catch(error) {
      console.error(error)
    }
  }, [evento, httpGet])

  useEffect(() => {
    if(evento?.alias) validarAlias()
  }, [evento?.alias, validarAlias])

  return (
    <ContextoEvento.Provider value={{
      aliasValido,
      evento,
      convidado,
      alterarEvento: setEvento,
      alterarConvidado: setConvidado,
      salvarEvento,
      carregarEvento,
      adicionarConvidado,
      validarAlias



    }}>
      ${props.children}
    </ContextoEvento.Provider>
  )


}

export default ContextoEvento