import './footer.css'

export const Footer = () => {
    return(
        <footer className='footer__organo'>
            <div className='links__sociais'>
                <a href='youtbe.com'><img src='/imagens/fb.png' alt='icon do facebook'/></a>
                <a href='google.com'><img src='/imagens/tw.png' alt='icon do twitter'/></a>
                <a href='google.com'><img src='/imagens/ig.png' alt='icon do instagram'/></a>
            </div>
            <img src='/imagens/logo.png' alt='logo da organo'/>
            <p>Desenvolvido por Thomaz Alves</p>
        </footer>
    )
}