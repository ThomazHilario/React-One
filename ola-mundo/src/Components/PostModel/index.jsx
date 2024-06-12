// css import
import './postModel.css'

export const PostModel = ({titulo, urlImage}) => {
    return(
        <div className="postModel" style={{backgroundImage:`url(${urlImage})`}}>
            <h1>{titulo}</h1>
        </div>
    )
}