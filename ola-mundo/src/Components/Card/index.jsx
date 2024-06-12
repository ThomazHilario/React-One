import { Link } from 'react-router-dom'

export const Card = ({titulo, id}) => {
    return(
        <div className="card">
            <img src='vite.svg'/>
            <h1>{titulo}</h1>
            <Link to={`/post/${id}`}>Ler Mais</Link>
        </div>
    )
}