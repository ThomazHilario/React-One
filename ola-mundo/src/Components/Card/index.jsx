import { Link } from 'react-router-dom'

// css import
import './card.css'

export const Card = ({titulo, id}) => {
    return(
        <div className="card">
            <img src={`posts/${id}/capa.png`}/>
            <h1>{titulo}</h1>
            <Link to={`/post/${id}`}>Ler</Link>
        </div>
    )
}