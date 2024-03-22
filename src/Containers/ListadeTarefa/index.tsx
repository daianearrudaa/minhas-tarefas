import Tarefa from '../../Components/tarefa'
import { Container } from './styles'

import * as enums from '../../utils/enums/Tarefa'

const tarefas = [
  {
    titulo: 'estudar typescript',
    descricao: 'ver aula 3 ebac',
    prioridade: enums.Prioridade.IMPORTANTE,
    status: enums.Status.PENDENTE
  },
  {
    titulo: 'contas a pagar',
    descricao: 'pagar conta luz',
    prioridade: enums.Prioridade.URGENTE,
    status: enums.Status.PENDENTE
  },
  {
    titulo: 'estudar Redux',
    descricao: 'ver aula 5 ebac',
    prioridade: enums.Prioridade.IMPORTANTE,
    status: enums.Status.PENDENTE
  },
  {
    titulo: 'estudar Redux',
    descricao: 'ver aula 7 ebac',
    prioridade: enums.Prioridade.IMPORTANTE,
    status: enums.Status.PENDENTE
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
