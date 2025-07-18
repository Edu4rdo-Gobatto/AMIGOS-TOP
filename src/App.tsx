import Cadastro from "./pages/cadastro/cadastro"
import Header from "./pages/header/header"
import Midle from "./pages/midleOne/midle"
import MidleTwo from "./pages/midleTwo/midleTwo"
import QuemSomos from "./pages/quemSomos/quemSomos"
import Rodape from "./pages/rodape/rodape"


function App() {
  

  return (
    <div>
      <Header/>
      <Midle/>
      <MidleTwo/>
      <QuemSomos/>
      <Cadastro/>
      <Rodape/>
    </div>
  )
}

export default App
