import { useState } from 'react'

// import InputForm
import { InputForm } from '../InputForm'

// Componentes
import { SuspenseList } from '../SuspenseList'
import { Button } from '../Button'

import './formulario.css'

export const Form = () => {

    // states
    const [name, setName] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [team, setTeam] = useState('Programação')

    const times = [
        'Programação',
        'Front-End',
        'Back-End',
        'DevOps',
        'Inovaçao e Gestão',
        'Desing'
    ]

    function handleSubmit(e){
        // Evitando o formulario atualizar a pagina
        e.preventDefault()

        console.log(`${name}\n${cargo}\n${imagem}\n${team}`)
    }

    return(
        <section className="section__formulario">
            <form onSubmit={handleSubmit}>
                <h2>Preencha os dados para criar um colaborador:</h2>

                <InputForm 
                    nameLabel={'Nome'} 
                    textPlaceholder={'Digite o seu nome...'}
                    textInput={name}
                    setTextInput={setName}
                />

                <InputForm 
                    nameLabel={'Cargo'} 
                    textPlaceholder={'Digite o seu cargo...'}
                    textInput={cargo}
                    setTextInput={setCargo}
                />

                <InputForm 
                    nameLabel={'Imagem'} 
                    textPlaceholder={'Informe o endereço da imagem...'}
                    textInput={imagem}
                    setTextInput={setImagem}
                />

                <SuspenseList nameLabel={'Time'} itens={times} team={team} setTeam={setTeam}/>

                <Button>
                    Criar Time
                </Button>
            </form>
        </section>
    )
}   