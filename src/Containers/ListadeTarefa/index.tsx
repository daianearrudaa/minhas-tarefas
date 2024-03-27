import { useSelector } from 'react-redux'

import Tarefa from '../../Components/tarefa'
import { Container } from './styles'

import { RootReducer } from '../../store'

const ListadeTarefas = () => {
  const { itens } = useSelector((state: RootReducer) => state.tarefas)
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  const filtraTarefas = () => {
    return itens.filter(
      (item) => item.titulo.toLowerCase().search(termo.toLowerCase()) >= 0
    )
  }

  return (
    <Container>
      <p>
        2 tarefas marcadas como: &quot;categoria&ldquo; e &quot;{termo}&ldquo;
      </p>
      <ul>
        {filtraTarefas().map((t) => (
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
