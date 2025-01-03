
import type Usuario from '../model/Usuario';
import Id from '../model/Id';

export const usuarios: Usuario[] = [
  { id: Id.novo(), nome: "Ana Silva", email: "ana.silva@email.com", senha: "senhaAna123" },
  { id: Id.novo(), nome: "João Pereira", email: "joao.pereira@email.com", senha: "senhaJoao456" },
  { id: Id.novo(), nome: "Maria Oliveira", email: "maria.oliveira@email.com", senha: "senhaMaria789" },
  { id: Id.novo(), nome: "Carlos Souza", email: "carlos.souza@email.com", senha: "senhaCarlos101" },
  { id: Id.novo(), nome: "Fernanda Lima", email: "fernanda.lima@email.com", senha: "senhaFernanda202" },
  { id: Id.novo(), nome: "Paulo Rodrigues", email: "paulo.rodrigues@email.com", senha: "senhaPaulo303" },
  { id: Id.novo(), nome: "Juliana Mendes", email: "juliana.mendes@email.com", senha: "senhaJuliana404" },
  { id: Id.novo(), nome: "Roberto Costa", email: "roberto.costa@email.com", senha: "senhaRoberto505" },
  { id: Id.novo(), nome: "Larissa Almeida", email: "larissa.almeida@email.com", senha: "senhaLarissa606" },
  { id: Id.novo(), nome: "Ricardo Barbosa", email: "ricardo.barbosa@email.com", senha: "senhaRicardo707" },
  { id: Id.novo(), nome: "Vanessa Martins", email: "vanessa.martins@email.com", senha: "senhaVanessa808" },
  { id: Id.novo(), nome: "Diego Nunes", email: "diego.nunes@email.com", senha: "senhaDiego909" },
  { id: Id.novo(), nome: "Patrícia Ramos", email: "patricia.ramos@email.com", senha: "senhaPatricia010" },
  { id: Id.novo(), nome: "Felipe Ferreira", email: "felipe.ferreira@email.com", senha: "senhaFelipe111" },
  { id: Id.novo(), nome: "Beatriz Gomes", email: "beatriz.gomes@email.com", senha: "senhaBeatriz212" },
  { id: Id.novo(), nome: "Lucas Monteiro", email: "lucas.monteiro@email.com", senha: "senhaLucas313" },
  { id: Id.novo(), nome: "Carolina Dias", email: "carolina.dias@email.com", senha: "senhaCarolina414" },
  { id: Id.novo(), nome: "Mateus Franco", email: "mateus.franco@email.com", senha: "senhaMateus515" },
  { id: Id.novo(), nome: "Isabela Castro", email: "isabela.castro@email.com", senha: "senhaIsabela616" },
  { id: Id.novo(), nome: "Eduardo Vieira", email: "eduardo.vieira@email.com", senha: "senhaEduardo717" }
];

export default usuarios