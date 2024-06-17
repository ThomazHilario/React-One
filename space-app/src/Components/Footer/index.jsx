import styled from 'styled-components'

const FooterStyled = styled.footer`
    background-color: rgba(4, 36, 79, 1);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    color: white;

    p{
        margin: 0;
    }

    .redes__sociais{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1.5rem;
    }
`

export const Footer = () => {
    return(
        <FooterStyled>
            <div className='redes__sociais'>
                <a>
                    <img src='/imagens/sociais/facebook.svg' alt="icone da rede social" />
                </a>

                <a>
                    <img src='/imagens/sociais/twitter.svg' alt="icone da rede social" />
                </a>

                <a>
                    <img src='/imagens/sociais/instagram.svg' alt="icone da rede social" />
                </a>
            </div>

            <p>Desenvolvido por Alura</p>
        </FooterStyled>
    )
}