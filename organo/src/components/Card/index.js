// lucide react
import { BadgeX } from 'lucide-react'

export const Card = ({nome, cargo, imagem, corPrincipal, teamColaborador ,deletarColaborador}) => {
    return(
        <div className='card'>
            <BadgeX className='delete__card' size={30} onClick={() => deletarColaborador(nome, teamColaborador)}/>
            <div className='top__card' style={{backgroundColor:corPrincipal}}>
                <img src={imagem} alt='imagem do colaborador'/>
            </div>
            <div className='bottom__card'>
                <h2>{nome}</h2>
                <h3>{cargo}</h3>
            </div>
        </div>
    )
}