import { v4 as uuidv4 } from 'uuid';
import type Usuario from '../model/Usuario';

export const usuarios: Usuario[] = [
  { id: uuidv4(), nome: "Ana Silva", email: "ana.silva@email.com", senha: "senhaAna123" },
  { id: uuidv4(), nome: "João Pereira", email: "joao.pereira@email.com", senha: "senhaJoao456" },
  { id: uuidv4(), nome: "Maria Oliveira", email: "maria.oliveira@email.com", senha: "senhaMaria789" },
  { id: uuidv4(), nome: "Carlos Souza", email: "carlos.souza@email.com", senha: "senhaCarlos101" },
  { id: uuidv4(), nome: "Fernanda Lima", email: "fernanda.lima@email.com", senha: "senhaFernanda202" },
  { id: uuidv4(), nome: "Paulo Rodrigues", email: "paulo.rodrigues@email.com", senha: "senhaPaulo303" },
  { id: uuidv4(), nome: "Juliana Mendes", email: "juliana.mendes@email.com", senha: "senhaJuliana404" },
  { id: uuidv4(), nome: "Roberto Costa", email: "roberto.costa@email.com", senha: "senhaRoberto505" },
  { id: uuidv4(), nome: "Larissa Almeida", email: "larissa.almeida@email.com", senha: "senhaLarissa606" },
  { id: uuidv4(), nome: "Ricardo Barbosa", email: "ricardo.barbosa@email.com", senha: "senhaRicardo707" },
  { id: uuidv4(), nome: "Vanessa Martins", email: "vanessa.martins@email.com", senha: "senhaVanessa808" },
  { id: uuidv4(), nome: "Diego Nunes", email: "diego.nunes@email.com", senha: "senhaDiego909" },
  { id: uuidv4(), nome: "Patrícia Ramos", email: "patricia.ramos@email.com", senha: "senhaPatricia010" },
  { id: uuidv4(), nome: "Felipe Ferreira", email: "felipe.ferreira@email.com", senha: "senhaFelipe111" },
  { id: uuidv4(), nome: "Beatriz Gomes", email: "beatriz.gomes@email.com", senha: "senhaBeatriz212" },
  { id: uuidv4(), nome: "Lucas Monteiro", email: "lucas.monteiro@email.com", senha: "senhaLucas313" },
  { id: uuidv4(), nome: "Carolina Dias", email: "carolina.dias@email.com", senha: "senhaCarolina414" },
  { id: uuidv4(), nome: "Mateus Franco", email: "mateus.franco@email.com", senha: "senhaMateus515" },
  { id: uuidv4(), nome: "Isabela Castro", email: "isabela.castro@email.com", senha: "senhaIsabela616" },
  { id: uuidv4(), nome: "Eduardo Vieira", email: "eduardo.vieira@email.com", senha: "senhaEduardo717" }
];

export default usuarios