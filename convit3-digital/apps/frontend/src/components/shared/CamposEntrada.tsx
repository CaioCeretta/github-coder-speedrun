import React from 'react'

/* Or it can be React.HTMLProps<HTMLInputElement>

When we create an input field, inside react, is ideal that we do not supress the properties of an input
*/
export interface CamposEntradaProps extends React.InputHTMLAttributes<HTMLInputElement>{
  label: string;
  value: string | number;
  descricao?: string
  observacao?: string
  erro?: string

  onChange: (event: any) => void

}

export default function CamposEntrada(props: CamposEntradaProps) {
  return (
    <div className='flex flex-col gap-2 '>
      <div className='flex flex-col'  >
      {props.label && <label>{props.label}</label>}
      {props.descricao && <p>{props.descricao}</p>}
      </div>
      
      <input {...props} type={props.type ?? "text"}
        className='w-full px-3 py-2 border rounded '
      />
      {props.erro && (
        <span className='pl-2 text-sm text-red-500'>
          {props.erro}
        </span>
      )}

      {props.observacao && (
        <span className='text-xs pl-2 text-yellow-300'>{props.observacao}</span>
      )}


    </div>
  )
}
