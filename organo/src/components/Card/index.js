// lucide react
import { BadgeX, Heart } from 'lucide-react'

export const Card = ({times, setTimes, nome, cargo, imagem, corPrincipal, teamColaborador ,deletarColaborador, colaborador}) => {

    // favoriteCard
    function favoriteCard(){
        // Alterando o status do favorite
        colaborador.favorite = !colaborador.favorite

        // Salvando as alteracoes na state de times
        setTimes([...times])
    }

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
                    color={colaborador.favorite ? 'red' : 'black'}
                    onClick={favoriteCard}
                />
            </div>
        </div>
    )
}