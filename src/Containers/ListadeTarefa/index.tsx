import { useSelector } from 'react-redux'

import Tarefa from '../../Components/tarefa'
import { Container } from './styles'

import { RootReducer } from '../../store'

const ListadeTarefas = () => {
  const { itens } = useSelector((state: RootReducer) => state.tarefas)

  return (
    <Container>
      <p>
        2 tarefas marcadas como: &quot;categoria&ldquo; e &quot;termo&ldquo;
      </p>
      <ul>
        {itens.map((t) => (
          <li key={t.titulo}>
            <Tarefa
              id={t.id}
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
}
export default ListadeTarefas
