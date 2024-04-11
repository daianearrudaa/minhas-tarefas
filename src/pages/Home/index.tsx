import BotaoAdicionar from '../../Components/BotaoAdicionar'
import BarraLateral from '../../Containers/BarraLateral'
import ListadeTarefas from '../../Containers/ListadeTarefa'

const Home = () => (
  <>
    <BarraLateral mostrarFiltros />
    <ListadeTarefas />
    <BotaoAdicionar />
  </>
)

export default Home
