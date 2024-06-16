import styled from 'styled-components'

// logo svg
import Logo from './assets/imagens/Logo.svg'

// import Components
import { Globalcss } from './Components/Globalcss'
import { Header } from './Components/Header'
import { MenuDialog } from './Components/Menu/menu-dialog'
import { Input } from './Components/Input'
import { Aside } from './Components/Aside'
import { Banner } from './Components/Banner'
import { Gallery } from './Components/Gallery'


const ContainerApp = styled.div`
  background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
  min-height:100vh;
`

const Container = styled.div`
  margin:0px 20px;
`

const MainStyled = styled.main`
  display:flex;
`

const ContainerArticle = styled.article`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: 2rem;
`

function App() {

  return (
      <ContainerApp>
        <Globalcss/>

        <Container>
          <Header>
            <MenuDialog/>

            <img src={Logo} alt="Logo do space-app" />

            <Input/>
          </Header>

          <MainStyled>
            <Aside/>
            
            <ContainerArticle>
              <Banner/>

              <Gallery/>
            </ContainerArticle>
          </MainStyled>
        </Container>
      </ContainerApp>
  )
}

export default App
