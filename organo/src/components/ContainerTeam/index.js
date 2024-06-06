// Components
import { Card } from "../Card"

export const ContainerTeam = ({title, team, corPrincipal, corSecundaria, deletarColaborador}) => {

    // Verify teamNotIsEmpty
    const teamNotIsEmpty = team.length > 0

    if(teamNotIsEmpty){
        return(
            <div className='container__team' style={{backgroundColor:corSecundaria}}>
                <div className='introducao'>
                    <h1>{title}</h1>

                    <hr style={{borderColor:corPrincipal}}/> 
                </div>

                <div className='container__card'>
                    {team.map((colaborador, index) => (
                        <Card 
                            key={index} 
                            nome={colaborador.nome} 
                            cargo={colaborador.cargo} 
                            imagem={colaborador.imagem} 
                            teamColaborador={colaborador.team}
                            corPrincipal={corPrincipal}
                            deletarColaborador={deletarColaborador} 
                        />
                    ))}
                </div>
            </div>
        )
    }
}