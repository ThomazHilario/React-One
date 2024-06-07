import './inputForm.css'

export const InputForm = ({type, nameLabel, textPlaceholder, textInput, setTextInput}) => {
    return(
        <div className="container__campo">
            <label>{nameLabel}</label>
            <input value={textInput} onChange={(e) => setTextInput(e.target.value)} type={type} placeholder={textPlaceholder} required/>
        </div>
    )
}