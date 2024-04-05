import { useSelector } from 'react-redux'

import Tarefa from '../../Components/tarefa'
import { MainContainer, Titulo } from '../../styles'

import { RootReducer } from '../../store'

const ListadeTarefas = () => {
  const { itens } = useSelector((state: RootReducer) => state.tarefas)
  const { termo, criterio, valor } = useSelector(
    (state: RootReducer) => state.filtro
  )

  const filtraTarefas = () => {
    let tarefasFiltradas = itens
    if (termo !== undefined) {
      tarefasFiltradas = tarefasFiltradas.filter(
        (item) => item.titulo.toLowerCase().search(termo.toLowerCase()) >= 0
      )
      if (criterio === 'prioridade') {
        tarefasFiltradas = tarefasFiltradas.filter(
          (item) => item.prioridade === valor
        )
      } else if (criterio === 'status') {
        tarefasFiltradas = tarefasFiltradas.filter(
          (item) => item.status === valor
        )
      }

      return tarefasFiltradas
    } else {
      return itens
    }
  }
  const exibeResultadoFiltro = (quantidade: number) => {
    let mensagem = ''
    const complementacao =
      termo !== undefined && termo.length > 0 ? ` e "${termo}"` : ''

    if (criterio === 'todas') {
      mensagem = `${quantidade} tarefas encontradas como: todas ${complementacao}`
    } else {
      mensagem = `${quantidade} tarefas encontradas como: "${`${criterio}=${valor}`}${complementacao}"`
    }

    return mensagem
  }

  const tarefas = filtraTarefas()
  const mensagem = exibeResultadoFiltro(tarefas.length)

  return (
    <MainContainer>
      <Titulo as="p">{mensagem}</Titulo>

      <ul>
        {tarefas.map((t) => (
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
    </MainContainer>
  )
}
export default ListadeTarefas
