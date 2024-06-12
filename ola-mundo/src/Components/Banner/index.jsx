import Foto from '../../assets/foto.png'
import './banner.css'

export const Banner = () => {
    return(
            <div className='banner'>
                <article>
                  <h1>Ola mundo!</h1>

                  <p>
                    Olá, eu sou o Thomaz, desenvolvedor Front-End com foco em React, e aqui você pode ver meus artigos.
                  </p>
                </article>

                <div className='container__imagem'>
                  <img src={Foto} alt='imagem '/>
                </div>
            </div>
    )
}