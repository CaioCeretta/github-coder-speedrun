import React from 'react'

export default function PrimeiroComponente() {
  return (
    <div className='p-8 flex flex-col gap-3'>
      <h1 className='text-3xl font-black'>Primeiro Componente</h1>
      <p className='font-sm text-gray-600'>Subtítulo da nossa página</p>

      <div>
        <span>Conteúdo</span>
      </div>

      <button className="botao vermelho self-start">Salvar</button>
    </div>
  )
}
