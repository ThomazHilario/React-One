import { Link } from 'react-router-dom'

// logo
import logo from '../../assets/imagens/Logo.svg'

// import css
import './header.css'

export const Header = () => {
    return(
        <header>
            <img src={logo} alt='Logo do site cinetag'/>

            <nav className='navegation'>
                <Link to='/'>Home</Link>
                <Link to='/favoritos'>Favoritos</Link>
            </nav>
        </header>
    )
}