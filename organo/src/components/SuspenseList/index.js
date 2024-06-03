import './suspenseList.css'

export const SuspenseList = ({nameLabel, itens, team, setTeam}) => {
    return(
        <div className="container__select">
            <label>{nameLabel}</label>

            <select value={team} onChange={(e) => setTeam(e.target.value)} required>
                {itens.map((item,idx) => <option key={idx}>{item}</option>)}
            </select>
        </div>
    )
}