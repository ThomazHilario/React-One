import styled from 'styled-components'

// banner
import banner from '../../assets/imagens/banner.svg'

const ContentBanner = styled.div`
    height: 200px;
    background-image: url(${banner});
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    padding: 0px 3rem;
    border-radius: 20px;

    h1{
        display:none;
        width:250px;
        font-weight: 400;
        font-size: 2rem;
        word-wrap: break-word;
        color: rgba(255, 255, 255, 1);
    }

    @media screen and (min-width:400px){
        &{
            height: 230px;
        }

        h1{
            display: block;
        }
    }

    @media screen and (min-width:1024px){
        &{
            height: 280px;
        }
    }
`

export const Banner = () => {
    return(
        <ContentBanner>
            <h1>A galeria mais completa de fotos do espaço!</h1>
        </ContentBanner>
    )
}