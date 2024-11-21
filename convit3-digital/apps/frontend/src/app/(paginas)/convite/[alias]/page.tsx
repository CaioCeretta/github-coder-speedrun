
export default function PaginaConvite(props: any) {
  console.log('Pagina Convite', props)

  return (
    <div>
      <span>{props.params.alias}</span>
    </div>
  );
}