// import Components
import { ContainerTeam } from '../ContainerTeam'

import './showCollaborators.css'

export const ShowCollaborators = ({times, colaboradores}) => {

    const collaboratornNotIsEmpty = colaboradores.length > 0

    if(collaboratornNotIsEmpty){
        return(
            <section className='container__colaboradores'>
                <div className='section__introducao'>
                    <h1>Minha Organização:</h1>
                    <hr/>
                </div>
    
                {times.map((time, index) => <ContainerTeam key={index} title={time.nome} team={colaboradores.filter(colaborador => colaborador.team === time.nome)} corPrincipal={time.corPrincipal} corSecundaria={time.corSecundaria}/>)}
            </section>
        )
    }
}