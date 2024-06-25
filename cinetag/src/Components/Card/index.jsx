// React router dom
import { Link } from 'react-router-dom'

// Context
import UseMyContext from '@/Context/context.jsx'

// import css
import './card.css'

// react-icons
import { FaHeart, FaRegHeart  } from "react-icons/fa";

export const Card = ({id, imageUrl, titulo, isFavorite}) => {

    const { setStatusInIsFavorite } = UseMyContext()

    // Propriedades dos icons
    const propsIcon = {
        color:'black',
        size:25,
        cursor:'pointer'
    }

    return(
            <div className="card">
                {/* Imagem do post */}
                <img src={imageUrl} alt='Foto do post'/>

                <div>
                    {/* Titulo do post */}
                    <Link to={`player/${id}`}>{titulo}</Link>

                    {/* Icone de favoritar o post */}
                    {isFavorite ? (
                        <FaHeart {...propsIcon} onClick={() => setStatusInIsFavorite(id)}/>
                        ) : (
                            <FaRegHeart {...propsIcon} onClick={() => setStatusInIsFavorite(id)}/>
                        )
                    }
                </div>
            </div>
    )
}