export const Card = ({nome, cargo, imagem}) => {
    return(
        <div className='card'>
            <div className='top__card'>
                <img src={imagem} alt='imagem do colaborador'/>
            </div>
            <div className='bottom__card'>
                <h2>{nome}</h2>
                <h3>{cargo}</h3>
            </div>
        </div>
    )
}