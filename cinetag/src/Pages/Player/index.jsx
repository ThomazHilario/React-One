// React
import { useParams } from 'react-router-dom'

// Context
import UseMyContext from '@/Context/context.jsx'

// Components
import { ContainerPage } from '@/Components/ContainerPage'
import { Banner } from '@/Components/Banner'
import { Title } from '@/Components/Title'

// Banner image
import banner from '@/assets/imagens/banner_player.svg'

// import css
import './player.css'

export const Player = () => {

    // id from useParams
    const { id } = useParams()

    // post from context
    const { post } = UseMyContext()

    // post from video
    const postFromVideo = post.find(postItem => postItem.id === Number(id))

    return(
        <ContainerPage>
            <Banner imageUrl={banner}/>

            <Title texto='Player'/>

            <section className='container__player'>
                <iframe src={postFromVideo.link} />
            </section>
        </ContainerPage>
    )
}