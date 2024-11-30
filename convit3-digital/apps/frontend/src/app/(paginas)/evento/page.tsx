'use client'

import Janela from "@/components/shared/Janela";
import useEvento from "@/data/hooks/useEvento";


export default function PaginaEvento() {



  const { evento } = useEvento();


  return (
    <div>
      <Janela
      label="Qual evento vamos criar?"
      titulo={evento?.nome ? evento?.nome : 'Novo Evento'}
      imagem={evento?.imagem}
      background={evento?.imagemBackground}
      >
        <span>evento</span>
        <span>evento</span>
        <span>evento</span>
        <span>evento</span>
        <span>evento</span>
        <span>evento</span>
        <span>evento</span>
        <span>evento</span>
      </Janela>
    </div>
  );
}