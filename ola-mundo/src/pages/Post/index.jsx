// React router dom
import { useParams } from "react-router-dom"

// Components
import { PostModel } from "../../Components/PostModel"

// import Array
import PostArray from '../../posts.json'

export const Post = () => {

    // pegando o id passado por parametro da url
    const { id } = useParams()

    // Buscando post em especifico
    const post = PostArray.find(post => String(post.id) === id)

    return(
        <div>
            <PostModel titulo={post.titulo} urlImage={`/posts/${id}/capa.png`}/>
        </div>
    )
}