import type { Convidado } from "core"

export interface FormConvidadoProps {
  convidado: Partial<Convidado>
  convidadoMudou: (convidado: Partial<Convidado>) => void
}

function FormConvidado(props: FormConvidadoProps) {
  return (
    <div>
      Formulário de Convidado
    </div>
  )
}

export default FormConvidado