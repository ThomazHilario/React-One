import { useState, createContext, useContext, useReducer, useMemo } from 'react'

// Reducer
import { carrinhoReducer } from '../reducers/carrinhoRedurcers'

// Contexto
const Context = createContext(null)

const initialStateCarrinho = []

// ContextProvider
export const ContextProvider = ({children}) => {

    // Carrinho - state
    const [carrinho, dispatch] = useReducer(carrinhoReducer, initialStateCarrinho)

    // Quantidade de produtos - state
    const [quantidade, setQuantidade] = useState(0);

    // Valor total do carrinho - state
    const [valorTotal, setValorTotal] = useState(0);

    // calculandoValorTotal
    function calculandoOValorTotal(){
        // Percorrendo o array de produtos
        const precosDosProdutos = carrinho.map(itemCart => {
          return itemCart.preco * itemCart.quantidade
        })
  
        // Caso tenha somente um produto no carrinho
        if(carrinho.length === 1){
          setValorTotal(precosDosProdutos)
          return
        }
  
        // Caso tenha mais de dois produtos na state carrinho
        setValorTotal(carrinho.length > 0 ? precosDosProdutos.reduce((acc,item) => item += acc) : 0)
      }
  
      // Usando o useMemo para calcular o valor da compra e guardar em cache.(Evita o componente renderizar.)
      useMemo(() => {
        // Calculando o valor da compra
        calculandoOValorTotal()
  
        // Calculando a quantidade de itens no carrinho
        setQuantidade(carrinho.length)
      },[carrinho])

    return(
        <Context.Provider value={{carrinho, dispatch, quantidade, setQuantidade, valorTotal, setValorTotal}}>
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
