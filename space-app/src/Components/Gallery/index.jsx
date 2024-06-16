// Components
import { Title } from "../Title"
import { Tags } from "../Tags"
import { Card } from "../Card"

// styled Components
import styled from "styled-components"

const GalleryContainer = styled.div`
    display: flex;
`

const GalleryContent = styled.section`
    width:100%;
    text-align: center;
    @media screen and (min-width:768px){
        width: auto;
        text-align: start;
        flex-grow: 1;
    }
`

const PopularContainer = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    img{
        width:200px;
        border-radius: 10px;
        margin: 15px 0;
    }
    @media screen and (min-width:768px){
        width: auto;
    }
`

const CardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
`

export const Gallery = ({fotos}) => {
    return(
        <div>
            <Tags />
            <GalleryContainer>
                <GalleryContent>
                    <Title>Navegue pela galeria</Title>

                    <CardContainer>
                        {fotos.map(foto => (
                            <Card 
                                key={foto.id} 
                                url={foto.path} 
                                titulo={foto.titulo}
                                fonte={foto.fonte}
                            />
                        ))}
                    </CardContainer>
                </GalleryContent>

                <PopularContainer>
                    <Title $align='center'>Populares</Title>

                    {fotos.map(foto => <img src={foto.path}/>)}
                </PopularContainer>
            </GalleryContainer>
        </div>
    )
}