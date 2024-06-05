// import Components
import { ContainerTeam } from '../ContainerTeam'

import './showCollaborators.css'

export const ShowCollaborators = ({times, colaboradores}) => {

    const collaboratornNotIsEmpty = colaboradores.length > 0

    if(collaboratornNotIsEmpty){
        return(
            <section className='container__colaboradores'>
                <h1>Minha Organização:</h1>
                <hr/>
    
                {times.map((time, index) => <ContainerTeam key={index} title={time} team={colaboradores.filter(colaborador => colaborador.team === time)}/>)}
            </section>
        )
    }
}