// import InputForm
import { InputForm } from '../InputForm'

import './formulario.css'

export const Form = () => {
    return(
        <section className="section__formulario">
            <form>
                <h2>Preencha os dados para criar um colaborador:</h2>
                <InputForm nameLabel={'Nome'} textPlaceholder={'Digite o seu nome...'}/>
                <InputForm nameLabel={'Cargo'} textPlaceholder={'Digite o seu cargo...'}/>
                <InputForm nameLabel={'Imagem'} textPlaceholder={'Informe o endereço da imagem...'}/>
            </form>
        </section>
    )
}   