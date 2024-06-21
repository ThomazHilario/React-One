// import css
import './containerpage.css'

export const ContainerPage = ({children}) => {
    return(
        <div className='container__page'>
            {children}
        </div>
    )
}