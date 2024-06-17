// styled components
import styled from 'styled-components'

// radix
import * as Dialog from '@radix-ui/react-dialog'

// lucide-react
import { Expand, Heart, X } from 'lucide-react'

// ------------------------------- //
const DialogTrigger = styled(Dialog.Trigger)`
    background-color: transparent;
    border: 0;
`

const DialogContent = styled(Dialog.Content)`
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%);
    width: 65vw;
    color:white;

    figure{
        display: flex;
        flex-direction: column;
        border-radius: 20px;
        overflow: hidden;
        margin: 0;

        button{
            background-color: transparent;
            border: 0;
            position: relative;
        }

        .image{
            width: 100%;
            height: 80vh;
            background-repeat: no-repeat;
            background-size: cover;

            button{
                position: relative;
                left: 95%;
                top: 0.5rem;
            }
        }
    }

    figcaption{
        background-color: rgba(0, 22, 52, 1);
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

`

export const Modal = ({foto, titulo, fonte}) => {
    return(
        <Dialog.Root>
            <DialogTrigger>
                <Expand color='white' size={20} cursor='pointer' />
            </DialogTrigger>

            <Dialog.Portal>
                <DialogContent>
                    <figure>
                        <div className='image' style={{backgroundImage:`url(${foto})`}}>
                            <Dialog.Close>
                                <X color='white' size={20} cursor='pointer'/>
                            </Dialog.Close>
                        </div>
                        <figcaption>
                            <h3>{titulo}</h3>
                            <div>
                                <p>{fonte}</p>

                                <div className="icons">
                                    <Heart color='white' size={20} cursor='pointer'/>
                                </div>
                            </div>
                        </figcaption>
                    </figure>
                </DialogContent>
            </Dialog.Portal>
        </Dialog.Root>
    )
}