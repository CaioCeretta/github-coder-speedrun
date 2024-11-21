/* The spreading in the folder name, indicated that we are going to receive more than one parameter, in this case, the
id and possibly its password, the spread return the params in key values, and we can access them by doing like so */

export default function PaginaAdminEvento(props: any){
  const id = props.params.todos[0];
  const senha = props.params.todos[1];

  return (
    <div>
      <span>{id}</span>
      <span>{senha}</span>
    </div>
  )
} 
