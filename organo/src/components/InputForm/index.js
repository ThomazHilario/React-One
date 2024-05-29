import './inputForm.css'

export const InputForm = ({nameLabel, textPlaceholder}) => {
    return(
        <div className="container__campo">
            <label>{nameLabel}</label>
            <input type="text" placeholder={textPlaceholder}/>
        </div>
    )
}