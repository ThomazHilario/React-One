import { createContext, useContext, useState } from 'react'

// import posts
import posts from '@/Mocks/db.json'

// Context
const PostContext = createContext(null)

// Provider
export const PostProviderContext = ({children}) => {

    // state - post
    const [post, setPost] = useState(posts)

    function setStatusInIsFavorite(id){
        setPost(post.map(postItem => postItem.id === id ? {...postItem, isFavorite:!postItem.isFavorite} : postItem))
    }

    return(
        <PostContext.Provider value={{post, setPost, setStatusInIsFavorite}}>
            {children}
        </PostContext.Provider>
    )
}

export default function UseMyContext(){
    const myContext = useContext(PostContext)

    if(!myContext){
        throw 'Erro, o contexto não existe!!!'
    }

    return myContext
}