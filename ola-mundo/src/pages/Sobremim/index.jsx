// Components
import { PostModel } from "../../Components/PostModel"

// Image
import CapaSobreMim from '../../assets/sobre_mim_capa.png'

export const Sobremim = () => {
    return(
        <main>
            <PostModel titulo={'Sobre mim'} urlImage={CapaSobreMim}/>
        </main>
    )
}