import './showCollaborators.css'

export const ShowCollaborators = ({times, colaboradores}) => {

    return(
        <section className='container__colaboradores'>
            <h1>Minha Organização:</h1>
            <hr/>

            {times.map((time, index) => <ContainerTeam key={index} title={time} team={colaboradores.filter(colaborador => colaborador.cargo === time)}/>)}
        </section>
    )
}

const ContainerTeam = ({title, team}) => {

    const titleFormat = title.split(' ').join().replace(/\b\w*,\w*\b/g,'')

    return(
        <div className={`container__team ${titleFormat}`}>
            <h1>{title}</h1>

            <hr/>


        </div>
    )
}

const Card = () => {
    return(
        <div>

        </div>
    )
}