// Context
import { UseMyContext } from '../context'

// Reducers
import { ADD_PRODUTO, REMOVE_PRODUTO, UPDATE_QUANTIDADE } from '../reducers/carrinhoRedurcers';

const addProdutoAction = (novoProduto) => {
  return{
    type: ADD_PRODUTO,
    payload: novoProduto
  }
}

const removeProdutoAction = (produtoId) => {
  return{
    type: REMOVE_PRODUTO,
    payload: produtoId
  }
}

const updateQuantidadeProdutoAction = (produtoId, quantidade) => {
  return{
    type: UPDATE_QUANTIDADE,
    payload: {produtoId, quantidade}
  }
}

export const UseCarrinhoContext = () => {
    const { carrinho, dispatch, quantidade, valorTotal } = UseMyContext()

    // Adicionar produto
    function adicionarProduto(novoProduto) {
        dispatch(addProdutoAction(novoProduto))
    }

    // removerProduto
    function removerProduto(idProduto){
      // Buscando o produto que quero remover no carrinho
      const produto = carrinho.find((produto) => produto.id === idProduto)

      // Verificando se a quantidade do produto e igual a 1
      if(produto.quantidade === 1){

        // Removendo o produto do carrinho
        dispatch(removeProdutoAction(idProduto))
        return
      }

      // Caso o produto tenha a quantidade superior a 1, diminuimos a quantidade em 1
      dispatch(updateQuantidadeProdutoAction(idProduto, produto.quantidade - 1))
    }

    // removerProdutoCarrinho
    function removerProdutoCarrinho(idProduto){
      dispatch(removeProdutoAction(idProduto))
    }

    return{
        carrinho,
        adicionarProduto,
        removerProduto,
        removerProdutoCarrinho,
        valorTotal,
        quantidade
    }
      
}