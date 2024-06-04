// Components
import { Card } from "../Card"

export const ContainerTeam = ({title, team}) => {

    // Verify teamNotIsEmpty
    const teamNotIsEmpty = team.length > 0

    // Title format
    const titleFormat = title.split(' ').join().replace(/\b\w*,\w*\b/g,'')

    if(teamNotIsEmpty){
        return(
            <div className={`container__team ${titleFormat}`}>
                <div className='introducao'>
                    <h1>{title}</h1>

                    <hr/> 
                </div>

                <div className='container__card'>
                    {team.map((colaborador, index) => <Card key={index} nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem}/>)}
                </div>
            </div>
        )
    }
}