// React
import { useEffect } from 'react'

// Context
import UseMyContext from '@/Context/context.jsx'

// Components
import { ContainerPage } from '../../Components/ContainerPage'
import { Banner } from '@/Components/Banner'
import { Title } from '@/Components/Title'
import { Card } from '@/Components/Card'

// img Banner
import banner_principal from '@/assets/imagens/banner_principal.svg'

// import css
import './home.css'

export const Home = () => {

    const {post, setPost} = UseMyContext()

    useEffect(() => {
        async function loadPosts(){
            try {
                // Fazendo requisição
                const response = await fetch('https://my-json-server.typicode.com/monicahillman/cinetag-api/videos')

                // Transformando os dados em javascript
                const data = await response.json()

                // colocando dentro do array de post
                setPost(data)
            } catch (e) {
                console.log(e)
            }
        }

        loadPosts()
    },[])

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
                    />
                ))}
            </div>

        </ContainerPage>
        
    )
}