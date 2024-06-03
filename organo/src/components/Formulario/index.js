// import InputForm
import { InputForm } from '../InputForm'

// Componentes
import { SuspenseList } from '../SuspenseList'
import { Button } from '../Button'

import './formulario.css'

export const Form = () => {

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

        console.log(e.currentTarget)
    }

    return(
        <section className="section__formulario">
            <form onSubmit={handleSubmit}>
                <h2>Preencha os dados para criar um colaborador:</h2>
                <InputForm nameLabel={'Nome'} textPlaceholder={'Digite o seu nome...'}/>
                <InputForm nameLabel={'Cargo'} textPlaceholder={'Digite o seu cargo...'}/>
                <InputForm nameLabel={'Imagem'} textPlaceholder={'Informe o endereço da imagem...'}/>
                <SuspenseList nameLabel={'Time'} itens={times}/>
                <Button>
                    Criar Time
                </Button>
            </form>
        </section>
    )
}   