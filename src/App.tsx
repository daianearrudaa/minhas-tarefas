import { Provider } from 'react-redux'
import BarraLateral from './Containers/BarraLateral'
import ListadeTarefas from './Containers/ListadeTarefa'
import EstiloGlobal, { Container } from './styles'

import store from './store'

function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <Container>
        <BarraLateral />
        <ListadeTarefas />
      </Container>
    </Provider>
  )
}

export default App
