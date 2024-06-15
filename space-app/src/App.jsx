import styled from 'styled-components'

// logo svg
import Logo from './assets/imagens/Logo.svg'

import { Menu } from 'lucide-react'

// import Components
import { Globalcss } from './Components/Globalcss'
import { Header } from './Components/Header'
import { Input } from './Components/Input'
import { Aside } from './Components/Aside'
import { Banner } from './Components/Banner'

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

function App() {

  return (
      <ContainerApp>
        <Globalcss/>

        <Container>
          <Header>

            <Menu color='white'/> 

            <img src={Logo} alt="Logo do space-app" />

            <Input/>
          </Header>

          <MainStyled>
            <Aside/>
            <Banner/>
          </MainStyled>
        </Container>
      </ContainerApp>
  )
}

export default App
