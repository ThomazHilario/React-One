import './button.css'

export const Button = ({children}) => {
    return(
        <div className='container__campo'>
            <button>{children}</button>
        </div>
    )
        
}