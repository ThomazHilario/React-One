import { createContext, useContext, useState, useCallback } from 'react'

// Context
const PostContext = createContext(null)

// Provider
export const PostProviderContext = ({children}) => {

    // state - post
    const [post, setPost] = useState([])

    const setStatusInIsFavorite = useCallback((id) => {
        setPost(post.map(postItem => postItem.id === id ? {...postItem, isFavorite:!postItem.isFavorite} : postItem))
    },[post])

    return(
        <PostContext.Provider value={{post, setPost, setStatusInIsFavorite}}>
            {children}
        </PostContext.Provider>
    )
}

export default function UseMyContext(){
    const myContext = useContext(PostContext)

    if(!myContext){
        throw new Error('Erro, o contexto não existe!')
    }

    return myContext
}