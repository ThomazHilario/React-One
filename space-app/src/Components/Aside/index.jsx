import styled from "styled-components"

// Components
import { ItemList } from "./item-list"

const AsideStyled = styled.aside`

    display: none;

    @media screen and (min-width:580px){
        display: block;
    }
`

const ListStyleCss = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    width: 212px;
`

export const Aside = () => {
    return(
        <AsideStyled>
            <nav>
                <ListStyleCss>
                    <ItemList 
                        texto='Inicio' 
                        iconActive='/icones/Home-ativo.svg' 
                        iconDisable='/icones/Home-inativo.svg' 
                        isActive
                    />
                    
                    <ItemList 
                        texto='Mais vistas' 
                        iconActive='/icones/Mais-vistas-ativo.svg' 
                        iconDisable='/icones/Mais-vistas-inativo.svg' 
                        isActive={false}
                    />

                    <ItemList 
                        texto='Mais curtidas' 
                        iconActive='/icones/Mais-curtidas-ativo.svg' 
                        iconDisable='/icones/Mais-curtidas-inativo.svg' 
                        isActive={false}
                    />

                    <ItemList 
                        texto='Novas' 
                        iconActive='/icones/Novas-ativo.svg' 
                        iconDisable='/icones/Novas-inativo.svg' 
                        isActive={false}
                    />

                    <ItemList 
                        texto='Surpreenda-me' 
                        iconActive='/icones/Surpreenda-me-ativo.svg' 
                        iconDisable='/icones/Surpreenda-me-inativo.svg' 
                        isActive={false}
                    />
                </ListStyleCss>
            </nav>
        </AsideStyled>
    )
}