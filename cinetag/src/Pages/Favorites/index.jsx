// components
import { ContainerPage } from '@/Components/ContainerPage'
import { Banner } from '@/Components/Banner'
import { Title } from '@/Components/Title'

// Banner imagem
import banner from '@/assets/imagens/banner_favoritos.svg'

export const Favorites = () => {
    return(
        <ContainerPage>
            {/* Banner */}
            <Banner imageUrl={banner}/>

            {/* Titulo */}
            <Title texto="Meus Favoritos"/>

            <section className='secao_favoritos'>

            </section>
        </ContainerPage>
    )
}