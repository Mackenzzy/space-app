import { styled } from "styled-components"
import EstilosGlobais from './componentes/EstilosGlobais/index'
import Cabecalho from "./componentes/Cabecalho"
import BarraLateral from "./componentes/BarraLateral"
import Banner from "./componentes/Banner"
import BannerBackground from "./assets/Banner.png"
import Galeria from "./componentes/Galeria"


const FundoGradiente = styled.div`
  background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
  width:100%;
  min-height: 100vh;  
  `

const AppContainer = styled.div`
  width: 1440px;
  max-width: 100%;
  margin: 0 auto;
`
const MainContainer = styled.main`
  display: flex;
  gap: 24px;
`
const ConteudodaGaleria = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`

function App() {

  return (
    <FundoGradiente>
      
      <EstilosGlobais/>
      <AppContainer>

        <Cabecalho/>
        <MainContainer>
          <BarraLateral/>
          <ConteudodaGaleria>
            <Banner
              texto="A Galeria mais completa de fotos do espaço!"
              backgroundImage= {BannerBackground}
            />
            <Galeria/>
          </ConteudodaGaleria>
        </MainContainer>
      </AppContainer>
    </FundoGradiente>
  )
}

export default App
