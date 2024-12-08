import type { Convidado } from "core"
import CampoEntrada from "../shared/CampoEntrada"

export interface FormConvidadoProps {
  convidado: Partial<Convidado>
  convidadoMudou: (convidado: Partial<Convidado>) => void
}

function FormConvidado(props: FormConvidadoProps) {
  return (
    <div className="flex flex-col gap-5 ">
      <CampoEntrada
        label={'Nome'}
        value={props.convidado.nome ?? ""}
        onChange={(e) => 
          props.convidadoMudou({...props.convidado, nome: e.target.value})
        }
      />
      <CampoEntrada
        label={'Email'}
        value={props.convidado.email ?? ""}
        onChange={(e) => 
          props.convidadoMudou({...props.convidado, email: e.target.value})
        }
      />



        
    </div>
  )
}

export default FormConvidado