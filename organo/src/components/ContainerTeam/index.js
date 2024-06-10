// Components
import { Card } from "../Card"

export const ContainerTeam = ({title, team, times, setTimes, corPrincipal, corSecundaria, deletarColaborador}) => {

    // Verify teamNotIsEmpty
    const teamNotIsEmpty = team.length > 0

    // updateColorTeam
    function updateColorTeam(e){
        // Alterando a cord de fundo do time em especifico
        setTimes(times.map(time => {
            if(time.corPrincipal === corPrincipal){
                // Alterando a cor principal
                time.corPrincipal = e.target.value

                // Alterando a cor secundaria
                time.corSecundaria = e.target.value + '90'
            }

            return time
        }))
    }

    if(teamNotIsEmpty){
        return(
            <div className='container__team' style={{backgroundColor:corSecundaria}}>
                <input value={corPrincipal} onChange={updateColorTeam} type="color"/>
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