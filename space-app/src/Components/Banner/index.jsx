import styled from 'styled-components'

// banner
import banner from '../../assets/imagens/banner.svg'

const ContentBanner = styled.div`
    height: 330px;
    width: 100%;
    background-image: url(${banner});
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    padding: 0px 3rem;
    border-radius: 20px;

    h1{
        width: 230px;
        font-weight: 400;
        font-size: 2rem;
        word-wrap: break-word;
        color: rgba(255, 255, 255, 1);
    }
`

export const Banner = () => {
    return(
        <ContentBanner>
            <h1>A galeria mais completa de fotos do espaço!</h1>
        </ContentBanner>
    )
}