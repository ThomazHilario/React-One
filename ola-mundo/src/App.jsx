// React router dom
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

// components
import { Banner } from './Components/Banner'
import { Footer } from './Components/Footer'

// Pages
import { Home } from './pages/Home'
import { Sobremim } from './pages/Sobremim'
import { Error } from './pages/Error'

function App() {

  return (
    <BrowserRouter>
        {/* header */}
        <header>
          <nav className='menu__navegacao'>
            <Link to='/'>Home</Link>
            <Link to='/sobremim'>Sobre mim</Link>
          </nav>

          <Banner/>
        </header>

        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/sobremim' element={<Sobremim/>}/>
          <Route path='*' element={<Error/>}/>
        </Routes>

        <Footer/>
    </BrowserRouter>
  )
}

export default App
