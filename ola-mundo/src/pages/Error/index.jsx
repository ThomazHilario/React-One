import { Link } from 'react-router-dom'

// css import
import './error.css'

export const Error = () => {
    return (
        <div className='container__error'>
            <h1>Error 404</h1>

            <h2>Página não encontrada!!</h2>

            <Link to='/'>Voltar</Link>
        </div>
    )
}