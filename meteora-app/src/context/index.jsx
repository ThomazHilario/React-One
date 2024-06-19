import { useState, createContext, useContext } from 'react'

// Contexto
const Context = createContext(null)

// ContextProvider
export const ContextProvider = ({children}) => {

    // Carrinho - state
    const [carrinho, setCarrinho] = useState([])

    // Quantidade de produtos - state
    const [quantidade, setQuantidade] = useState(0);

    // Valor total do carrinho - state
    const [valorTotal, setValorTotal] = useState(0);

    return(
        <Context.Provider value={{carrinho, setCarrinho, quantidade, setQuantidade, valorTotal, setValorTotal}}>
            {children}
        </Context.Provider>
    )
}

export function UseMyContext(){
    // Usando o contexto
    const context = useContext(Context)

    // Verificando se possui estados no contexto
    if(!context){
        throw 'Não existe nenhum contexto'
    }

    return context
}
