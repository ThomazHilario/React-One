import './suspenseList.css'

export const SuspenseList = ({nameLabel, itens}) => {
    return(
        <div className="container__select">
            <label>{nameLabel}</label>

            <select>
                {itens.map((item,idx) => <option key={idx}>{item}</option>)}
            </select>
        </div>
    )
}