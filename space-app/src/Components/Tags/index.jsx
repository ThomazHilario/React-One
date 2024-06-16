// styled Components
import styled from 'styled-components'

// minhas tags
import tags from './tags.json'

const TagsContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 2rem;
    font-size: 1.5rem;
    span{
        color:rgba(217, 217, 217, 1);
        
    }
`

const ContainerButton = styled.div`
    border-radius: 5px;
    overflow: hidden;
`

const Button = styled.button`
    background-color: rgba(217, 217, 217, 0.3);
    color: white;
    padding: 10px;
    border: 2px solid;
    border-image-slice: ${props => props.$isActive && 1};
    border-image-source: linear-gradient(90deg, #C98CF1 0%, #7B78E5 100%);
    cursor: pointer;

`

export const Tags = () => {
    return(
        <TagsContainer>
            <span>Busque por tags:</span>
            {tags.map(tag => (
                <ContainerButton key={tag.id}>
                    <Button $isActive={tag.isActiver}>{tag.titulo}</Button>
                </ContainerButton>
            ))}
        </TagsContainer>
    )
}