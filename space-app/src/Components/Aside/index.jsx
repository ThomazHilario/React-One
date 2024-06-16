import styled from "styled-components"

// Components
import { MenuNavigation } from "../Menu"

const AsideStyled = styled.aside`

    display: none;

    @media screen and (min-width:580px){
        display: block;
    }
`

export const Aside = () => {
    return(
        <AsideStyled>
            <nav>
                <MenuNavigation/>
            </nav>
        </AsideStyled>
    )
}