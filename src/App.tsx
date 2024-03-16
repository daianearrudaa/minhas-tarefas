import BarraLateral from './Containers/BarraLateral'
import ListadeTarefas from './Containers/BarraLateral/ListadeTarefa'
import EstiloGlobal, { Container } from './styles'

function App() {
  return (
    <>
      <EstiloGlobal />
      <Container>
        <BarraLateral />
        <ListadeTarefas />
      </Container>
    </>
  )
}

export default App
