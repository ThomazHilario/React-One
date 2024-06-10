import { useState } from 'react'

// lucide react
import { BadgeX, Heart } from 'lucide-react'

export const Card = ({nome, cargo, imagem, corPrincipal, teamColaborador ,deletarColaborador}) => {

    const [isMyFavoriteCard, setIsMyFavoriteCard] = useState(false)

    return(
        <div className='card'>
            <BadgeX className='delete__card' size={30} onClick={() => deletarColaborador(nome, teamColaborador)}/>
            <div className='top__card' style={{backgroundColor:corPrincipal}}>
                <img src={imagem} alt='imagem do colaborador'/>
            </div>
            <div className='bottom__card'>
                <h2>{nome}</h2>
                <h3>{cargo}</h3>
                <Heart 
                    size={20}
                    color={isMyFavoriteCard ? 'red' : 'black'}
                    onClick={() => setIsMyFavoriteCard(!isMyFavoriteCard)}
                />
            </div>
        </div>
    )
}