import Pagina from "@/components/template/Pagina";
import { ProvedorContextoEvento } from "@/data/contexts/ContextoEventos";

export default function Layout(props: any) {
  return (
    <ProvedorContextoEvento>
        <Pagina>
          {props.children}
        </Pagina>
    </ProvedorContextoEvento >
  )
}