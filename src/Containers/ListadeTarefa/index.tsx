import Tarefa from '../../Components/tarefa'
import { Container } from './styles'

const tarefas = [
  {
    titulo: 'estudar typescript',
    descricao: 'ver aula 3 ebac',
    prioridade: 'importante',
    status: 'pendente'
  },
  {
    titulo: 'contas a pagar',
    descricao: 'pagar conta luz',
    prioridade: 'urgente',
    status: 'concluída'
  },
  {
    titulo: 'estudar Redux',
    descricao: 'ver aula 5 ebac',
    prioridade: 'importante',
    status: 'pendente'
  },
  {
    titulo: 'estudar Redux',
    descricao: 'ver aula 7 ebac',
    prioridade: 'importante',
    status: 'pendente'
  }
]

const ListadeTarefas = () => (
  <Container>
    <p>2 tarefas marcadas como: &quot;categoria&ldquo; e &quot;termo&ldquo;</p>
    <ul>
      {tarefas.map((t) => (
        <li key={t.titulo}>
          <Tarefa
            descricao={t.descricao}
            status={t.status}
            prioridade={t.prioridade}
            titulo={t.titulo}
          />
        </li>
      ))}
    </ul>
  </Container>
)

export default ListadeTarefas
