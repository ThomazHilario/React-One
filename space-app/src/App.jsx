// react
import { useState } from 'react'

// styled Componentes
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
import { Footer } from './Components/Footer'

// fotos Array
import fotosArr from './fotos.json'

const ContainerApp = styled.div`
  background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
  min-height:100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const Container = styled.div`
  margin:0px 20px;
  margin-bottom: 2rem;
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

  const [fotos, setFotos] = useState(fotosArr.map(fotos => {
    return {
      ...fotos,
      isFavorite:false
    }
  }))

  // Search - state
  const [search, setSearch] = useState('')

  const fotosFiltered = search !== '' ? fotos.filter(foto => foto.titulo.toLowerCase().includes(search.toLowerCase())) : fotos

  return (
      <ContainerApp>
        <Globalcss/>

        <Container>
          <Header>
            <MenuDialog/>

            <img src={Logo} alt="Logo do space-app" />

            <Input search={search} setSearch={setSearch}/>
          </Header>

          <MainStyled>
            <Aside/>
            
            <ContainerArticle>
              <Banner/>

              <Gallery 
                fotos={fotos}
                fotosFiltered={fotosFiltered}
                setFotos={setFotos}
              />
            </ContainerArticle>
          </MainStyled>
        </Container>
        <Footer/>
      </ContainerApp>
  )
}

export default App
