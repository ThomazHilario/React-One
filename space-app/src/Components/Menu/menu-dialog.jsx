// styled components
import styled from 'styled-components'

// radix
import * as Dialog from '@radix-ui/react-dialog'

// Components
import { MenuNavigation } from './index'

// lucide-react
import { Menu, X } from 'lucide-react'

const DialogTrigger = styled(Dialog.Trigger)`
    background-color: transparent;
    border: 0;

    @media screen and (min-width:580px){
        display: none;
    }
`

const DialogContent = styled(Dialog.Content)`
    background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
    position:absolute;
    top:1rem;
    left: 1rem;
    padding: 5px 10px;
    border-radius: 5px;

    button{
        background-color: transparent;
        border: 0;
        position: relative;
        left: 11.5rem;
    }
`

export const MenuDialog = () => {
    return(
        <Dialog.Root>
            <DialogTrigger>
                <Menu color='white' size={20}/>
            </DialogTrigger>

            <Dialog.Portal>
                    <DialogContent>
                        {/* dialog close */}
                        <Dialog.Close>
                            <X color='white' size={20}/>
                        </Dialog.Close>

                        {/* menu */}
                        <MenuNavigation/>
                    </DialogContent>
            </Dialog.Portal>
        </Dialog.Root>
    )
}