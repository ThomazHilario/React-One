// styled Components
import styled from 'styled-components'

// minhas tags
import tags from './tags.json'

const TagsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    font-size: 1rem;
    span{
        color:rgba(217, 217, 217, 1);
        
    }

    div{
        display: flex;
        gap: 5px;
    }

    @media screen and (min-width: 600px){
        font-size: 1.5rem;
    }

    @media screen and (min-width: 768px){
        flex-direction: row;
    }
`

const ContainerButton = styled.div`
    border-radius: 5px;
    overflow: hidden;
`

const Button = styled.button`
    background-color: rgba(217, 217, 217, 0.3);
    color: white;
    border: 2px solid;
    border-image-slice: ${props => props.$isActive && 1};
    border-image-source: linear-gradient(90deg, #C98CF1 0%, #7B78E5 100%);
    cursor: pointer;

    @media screen and (min-width:600px){
        padding: 10px;
    }

`

export const Tags = () => {
    return(
        <TagsContainer>
            <span>Busque por tags:</span>
            <div>
                {tags.map(tag => (
                    <ContainerButton key={tag.id}>
                        <Button $isActive={tag.isActiver}>{tag.titulo}</Button>
                    </ContainerButton>
                ))}
            </div>
        </TagsContainer>
    )
}