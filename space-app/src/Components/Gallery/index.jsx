import { Title } from "../Title"
import { Tags } from "./tags"

// styled Components
import styled from "styled-components"

const GalleryContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`

const GalleryContent = styled.section`
    width:100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    transition: 0.7s;

    @media screen and (min-width:768px){
        width: auto;
        align-items: start;
        flex-grow: 1;
    }
`

const PopularContainer = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and (min-width:768px){
        width: auto;
    }
`

export const Gallery = () => {
    return(
        <div>
            <Tags />
            <GalleryContainer>
                <GalleryContent>
                    <Title>Navegue pela galeria</Title>
                </GalleryContent>

                <PopularContainer>
                    <Title $align='center'>Populares</Title>
                </PopularContainer>
            </GalleryContainer>
        </div>
    )
}