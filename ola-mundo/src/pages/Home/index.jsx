// posts json
import posts from '../../posts.json'

// Componentes
import { Card } from '../../Components/Card'

// css import
import './home.css'

export const Home = () => {
    return(
        <main>
            <ul className='container__cards'>
                {posts.map(post => <Card key={post.id} id={post.id} titulo={post.titulo}/>)}
            </ul>
        </main>
    )
}