import { useState } from 'react'

// import InputForm
import { InputForm } from '../InputForm'

// Componentes
import { SuspenseList } from '../SuspenseList'
import { Button } from '../Button'

import './formulario.css'

export const Form = ({setColaboradores, times, setTimes}) => {

    // states
    const [teamColor, setTeamColor] = useState('#000000')
    const [teamName, setTeamName] = useState('')
    const [name, setName] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [team, setTeam] = useState('Programação')


    function handleSubmit(e){
        // Evitando o formulario atualizar a pagina
        e.preventDefault()

        if(name !== '' && cargo !== '' && imagem !== ''){
            setColaboradores({
                nome:name,
                cargo:cargo,
                imagem:imagem,
                team:team
            })
    
            // Limpando states
            setName('')
            setCargo('')
            setImagem('')
        }
    }

    // handleCreateNewTeam
    function handleCreateNewTeam(e){
        // Cancelar o envio do formulario
        e.preventDefault()

        // Salvando o state de times com o novo time
        setTimes([...times, {
            nome: teamName,
            cor:teamColor
        }])

        // Resetando states
        setTeamName('')
        setTeamColor('#000000')
    }

    return(
        <section className="section__formulario">
            <form onSubmit={handleSubmit}>
                <h2>Preencha os dados para criar um colaborador:</h2>

                <InputForm
                    type={'text'} 
                    nameLabel={'Nome'} 
                    textPlaceholder={'Digite o seu nome...'}
                    textInput={name}
                    setTextInput={setName}
                />

                <InputForm
                    type={'text'} 
                    nameLabel={'Cargo'} 
                    textPlaceholder={'Digite o seu cargo...'}
                    textInput={cargo}
                    setTextInput={setCargo}
                />

                <InputForm
                    type={'text'} 
                    nameLabel={'Imagem'} 
                    textPlaceholder={'Informe o endereço da imagem...'}
                    textInput={imagem}
                    setTextInput={setImagem}
                />

                <SuspenseList nameLabel={'Time'} itens={times.map(time => time.nome)} team={team} setTeam={setTeam}/>

                <Button>
                    Criar Card
                </Button>
            </form>

            <form onSubmit={handleCreateNewTeam}>
                <h2>Preencha os dados para criar um novo time:</h2>

                <InputForm 
                    type={'text'}
                    nameLabel={'Nome'}
                    textPlaceholder={'Digite o nome do time...'}
                    textInput={teamName}
                    setTextInput={setTeamName}
                />

                <InputForm 
                    type={'color'}
                    nameLabel={'Cor'}
                    textInput={teamColor}
                    setTextInput={setTeamColor}
                />

                <Button>
                    Criar Time
                </Button>
            </form>
        </section>
    )
}   