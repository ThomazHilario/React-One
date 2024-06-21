// React
import { useState } from 'react'

// Components
import { ContainerPage } from '../../Components/ContainerPage'
import { Banner } from '@/Components/Banner'
import { Title } from '@/Components/Title'
import { Card } from '@/Components/Card'

// img Banner
import banner_principal from '@/assets/imagens/banner_principal.svg'

// import posts
import posts from '@/Mocks/db.json'

// import css
import './home.css'

export const Home = () => {

    const [post, setPost] = useState(posts)

    function setStatusInIsFavorite(id){
        setPost(post.map(postItem => postItem.id === id ? {...postItem, isFavorite:!postItem.isFavorite} : postItem))
    }


    return(
        <ContainerPage >
            <Banner imageUrl={banner_principal}/>

            <Title texto="Um lugar para guardar seus vídeos e filmes!"/>

            <div className='container__cards'>
                {post.map(postItem => (
                    <Card 
                        key={postItem.id}
                        id={postItem.id} 
                        imageUrl={postItem.capa}
                        titulo={postItem.titulo} 
                        isFavorite={postItem.isFavorite}
                        handleClick={setStatusInIsFavorite}
                    />
                ))}
            </div>

        </ContainerPage>
        
    )
}