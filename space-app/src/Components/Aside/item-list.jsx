import styled from "styled-components"

const ItemStyleCss = styled.li`
    margin: 20px 0px;
    

    img{
        height: 25px;
        width: 30px;
    }

    a{
        display: flex;
        align-items: center;
        gap: 15px;
        text-decoration: none;
        color:rgba(217, 217, 217, 1);
    }
`

export const ItemList = ({texto, iconActive, iconDisable, isActive}) => {
    return(
        <ItemStyleCss>
            <a href="google.com.br">
                <img src={isActive ? iconActive : iconDisable} alt="imagem de icone" />
                {texto}
                </a>
        </ItemStyleCss>
    )
}   