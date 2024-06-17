import styled from "styled-components"

// Components
import { Modal } from "../Modal"

//  lucide-react
import { Heart, Expand } from "lucide-react"

const FigureStyled = styled.figure`
    display: flex;
    flex-direction: column;
    width: 250px;
    margin: 0;
    overflow: hidden;
    color:white;
    transition:0.7s;

    img{
        border-radius: 20px 20px 0px 0px;
        width: 100%;
        object-fit: cover;
    }

    figcaption{
        background-color: rgba(0, 22, 52, 1);
        border-radius: 0 0 20px 20px;
        padding: 1rem 1rem 0.5rem 1rem;
        h3{
            margin: 0px;
        }

        div{
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 5px;

            p{
                margin: 0;
            }

            .icons{
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 1rem;
            }
        }
    }

    @media screen and (min-width:1028px){
        width: 250px;
    }

    @media screen and (min-width:1200px){
        width: 350px;
    }

    @media screen and (min-width:1300px){
        width: 45%;
    }
    
`

export const Card = ({index, url, titulo, fonte, isFavorite, favoriteCard}) => {

    return(
        <FigureStyled>
            <img src={url} alt={titulo}/>
            <figcaption>
                <h3>{titulo}</h3>
                <div>
                    <p>{fonte}</p>

                    <div className="icons">
                        <Heart onClick={() => favoriteCard(index)} color={isFavorite ? 'red' : 'white'} size={20}/>
                        <Modal foto={url} titulo={titulo} fonte={fonte}/>
                    </div>
                </div>
            </figcaption>
        </FigureStyled>
    )
}