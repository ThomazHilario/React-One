// import Components
import { ContainerTeam } from '../ContainerTeam'

import './showCollaborators.css'

export const ShowCollaborators = ({times, setTimes, colaboradores, setColaboradores}) => {

    const collaboratornNotIsEmpty = colaboradores.length > 0

    // deletarColaborador
    function deletarColaborador(nameColaborador,teamColaborador){
        // Buscando colaborador a ser excluido
        const indexCollaboratorWillBeDelete = colaboradores.findIndex(colaborador => colaborador.nome === nameColaborador && colaborador.team === teamColaborador)

        // Retirando o colaborador do array
        colaboradores.splice(indexCollaboratorWillBeDelete, 1)

        // Salvando alteracoes
        setColaboradores([...colaboradores])
    }

    if(collaboratornNotIsEmpty){
        return(
            <section className='container__colaboradores'>
                <div className='section__introducao'>
                    <h1>Minha Organização:</h1>
                    <hr/>
                </div>
    
                {times.map((time, index) => (
                    <ContainerTeam key={index} 
                        title={time.nome} 
                        team={colaboradores.filter(colaborador => colaborador.team === time.nome)}
                        times={times} 
                        setTimes={setTimes}
                        corPrincipal={time.corPrincipal} 
                        corSecundaria={time.corSecundaria}
                        deletarColaborador={deletarColaborador}
                    />
                ))}
            </section>
        )
    }
}