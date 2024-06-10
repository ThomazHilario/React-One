// Components
import { Card } from "../Card"

export const ContainerTeam = ({title, team, times, setTimes, corPrincipal, deletarColaborador}) => {

    // Verify teamNotIsEmpty
    const teamNotIsEmpty = team.length > 0

    // updateColorTeam
    function updateColorTeam(e){
        // Alterando a cord de fundo do time em especifico
        setTimes(times.map(time => {
            if(time.cor === corPrincipal){
                // Alterando a cor principal
                time.cor = e.target.value
            }

            return time
        }))
    }

    if(teamNotIsEmpty){
        return(
            <div className='container__team' style={{backgroundColor:`${corPrincipal}90`}}>
                <input value={corPrincipal} onChange={updateColorTeam} type="color"/>
                <div className='introducao'>
                    <h1>{title}</h1>

                    <hr style={{borderColor:corPrincipal}}/> 
                </div>

                <div className='container__card'>
                    {team.map((colaborador, index) => (
                        <Card 
                            key={index} 
                            times={times}
                            setTimes={setTimes}
                            nome={colaborador.nome} 
                            cargo={colaborador.cargo} 
                            imagem={colaborador.imagem} 
                            teamColaborador={colaborador.team}
                            corPrincipal={corPrincipal}
                            deletarColaborador={deletarColaborador}
                            colaborador={colaborador}
                        />
                    ))}
                </div>
            </div>
        )
    }
}