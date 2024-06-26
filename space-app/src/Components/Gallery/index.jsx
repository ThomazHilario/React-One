// Components
import { Title } from "../Title"
import { Tags } from "../Tags"
import { Card } from "../Card"

// styled Components
import styled from "styled-components"

const GalleryContainer = styled.div`
    display: flex;
    flex-direction: column;

    @media screen and (min-width:768px){
        flex-direction: row;
    }
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
    justify-content: center;
    gap: 1rem;

    @media screen and (min-width:768px){
        justify-content: start;
    }

    @media screen and (min-width:800px){
        gap:2rem
    }
`

export const Gallery = ({fotos, setFotos, fotosFiltered}) => {

    // favoriteCard
    function favoriteCard(index){       

        // Alterando o valor da propriedada isFavorite
        fotosFiltered[index].isFavorite = !fotosFiltered[index].isFavorite

        // Salvando as alterações feitas
        setFotos([...fotos])

    }

    return(
        <div>
            <Tags />
            <GalleryContainer>
                <GalleryContent>
                    <Title>Navegue pela galeria</Title>

                    <CardContainer>
                        {fotosFiltered.map((foto, idx) => (
                            <Card 
                                key={foto.id} 
                                index={idx}
                                url={foto.path} 
                                titulo={foto.titulo}
                                fonte={foto.fonte}
                                favoriteCard={favoriteCard}
                                isFavorite={foto.isFavorite}
                            />
                        ))}
                    </CardContainer>
                </GalleryContent>

                <PopularContainer>
                    <Title $align='center'>Populares</Title>

                    {fotos.map(foto => <img  key={foto.id} src={foto.path}/>)}
                </PopularContainer>
            </GalleryContainer>
        </div>
    )
}