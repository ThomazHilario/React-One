import styled from 'styled-components'

import Logo from './assets/imagens/Logo.svg'

// import Components
import { Globalcss } from './Components/Globalcss'
import { Header } from './Components/Header'
import { Input } from './Components/Input'
import { Aside } from './Components/Aside'

const ContainerApp = styled.div`
  background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
  min-height:100vh;
`

function App() {

  return (
      <ContainerApp>
        <Globalcss/>

        <Header>
          <img src={Logo} alt="Logo do space-app" />

          <Input/>
        </Header>

        <Aside/>
      </ContainerApp>
  )
}

export default App
