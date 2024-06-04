export const Card = ({nome, cargo, imagem}) => {
    return(
        <div className='card'>
            <div className='top__card'>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaAycHruKZaIUk9wA5baKNnQr9IMcQNIhtRA&s' alt='imagem do colaborador'/>
            </div>
            <div className='bottom__card'>
                <h2>Thomaz Alves</h2>
                <h3>Desenvolvedor React na Alura</h3>
            </div>
        </div>
    )
}