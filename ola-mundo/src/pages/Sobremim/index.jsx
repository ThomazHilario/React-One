// Components
import { PostModel } from "../../Components/PostModel"

// Image
import CapaSobreMim from '../../assets/sobre_mim_capa.png'
import MinhaFoto from '../../assets/foto.png'

// css import
import './sobremim.css'

export const Sobremim = () => {
    return(
        <main className="container__sobremim">
            <PostModel titulo={'Sobre mim'} urlImage={CapaSobreMim}/>

            <div className="container_conteudo">
                <h1>Olá, eu sou o Thomaz</h1>

                <section className="container__apresentacao">
                    <article>
                        <p>
                            Oi, sou Thomaz, Desenvolvedor Front-End, seja bem vindo!!!
                        </p>

                        <p>
                            Minha História com programação começou no fundamental II, quando estava fazendo um curso de word e excel, um professor me convidou a participar de um novo curso em que ele estava prestes a começar. Então com ele consegui aprender muito sobre HTML5 e CSS3, e dai surgiu meu hobby em criar páginas web com HTML5 e CSS3.
                        </p>

                        <p>
                            Com o passar do tempo fui descobrindo novos conteúdos de programação no youtube, então no ensino médio, eu comecei a aprender a base da linguagem javaScript.
                        </p>

                        <p>
                            Pós Ensino médio, ingressei em uma faculdade para aprender mais sobre javaScript, foi então que descobrir que eu poderia evoluir meus conhecimentos com base em frameworks ou bibliotecas que usam a linguagem javaScript, de todas a que mais me encantou foi o React.
                        </p>

                        <p>
                            Em 2023 foquei em aprender muito sobre React, e boas práticas de como usá-lo.
                        </p>
                    </article>
                    <img src={MinhaFoto} alt="minha foto"/>
                </section>
            </div>
        </main>
    )
}