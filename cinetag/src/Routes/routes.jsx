import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Components
import { Header } from '@/Components/Header'
import { Home } from '@/Pages/Home'
import { Favorites } from '../Pages/Favorites'
import { Player } from '../Pages/Player'
import { NotFound } from '../Pages/NotFound'
import { Footer } from '@/Components/Footer'

export const RoutesPage = () => {
    return(
        <BrowserRouter>
            <Header/>
            
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/favoritos' element={<Favorites/>}/>
                <Route path='/player/:id' element={<Player/>}/>
                <Route path='*' element={<NotFound/>}/>
            </Routes>

            <Footer/>
        </BrowserRouter>
    )
}