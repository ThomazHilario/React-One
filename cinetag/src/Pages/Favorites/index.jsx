// components
import { ContainerPage } from '@/Components/ContainerPage'
import { Banner } from '@/Components/Banner'
import { Title } from '@/Components/Title'
import { Card } from '@/Components/Card'

// Context
import UseMyContext from '@/Context/context.jsx'

// Banner imagem
import banner from '@/assets/imagens/banner_favoritos.svg'

// import css
import './favorites.css'

export const Favorites = () => {

    const {post} = UseMyContext()

    // favoritesPosts
    const favoritesPosts = post.filter(postItem => postItem.isFavorite === true)

    return(
        <ContainerPage>
            {/* Banner */}
            <Banner imageUrl={banner}/>

            {/* Titulo */}
            {favoritesPosts.length > 0 ? (
                <Title texto="Meus Favoritos"/>
            ) : (
                <Title texto="Você não tem nenhum filme favorito!!"/>
            )}

            <section className='secao_favoritos'>
                {favoritesPosts.map((postItem) => (
                    <Card 
                        key={postItem.id}
                        id={postItem.id}
                        imageUrl={postItem.capa}
                        titulo={postItem.titulo}
                        isFavorite={postItem.isFavorite}                    />
                ))}
            </section>
        </ContainerPage>
    )
}