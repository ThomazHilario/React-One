// React-router-dom
import { Link } from 'react-router-dom'

// import css
import './notfound.css'

export const NotFound = () => {
    return(
        <div className='container__notfound'>
            <h1>Error 404</h1>
            <h2>Esta pagina não existe!!</h2>
            <Link to='/'>Voltar</Link>
        </div>
    )
}