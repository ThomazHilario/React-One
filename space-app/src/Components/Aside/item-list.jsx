import styled from "styled-components"

const ItemStyleCss = styled.li`
    margin: 20px 0px;
    text-align: center;
    font-family: 'gandhiSansBold';

    img{
        height: 25px;
        width: 30px;
    }

    a{
        display: flex;
        align-items: center;
        gap: 15px;
        text-decoration: none;
        color:${props => props.$isActive ? 'rgba(123, 120, 229, 1)' : 'rgba(217, 217, 217, 1)'};
        font-family:${props => props.$isActive ? 'gandhiSansBold' : 'gandhiSansRegular'}
    }
`

export const ItemList = ({texto, iconActive, iconDisable, isActive}) => {
    return(
        <ItemStyleCss $isActive={isActive}>
            <a href="google.com.br">
                <img src={isActive ? iconActive : iconDisable} alt="imagem de icone" />
                {texto}
            </a>
        </ItemStyleCss>
    )
}   