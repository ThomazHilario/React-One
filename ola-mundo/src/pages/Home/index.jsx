// posts json
import posts from '../../posts.json'

// Componentes
import { Card } from '../../Components/Card'

// css import
import './home.css'

export const Home = () => {
    return(
        <main className='container__home'>
            <ul className='container__cards'>
                {posts.map(post => <li key={post.id}><Card id={post.id} titulo={post.titulo}/></li>)}
            </ul>
        </main>
    )
}