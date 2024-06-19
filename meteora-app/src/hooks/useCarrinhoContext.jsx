import { UseMyContext } from '../context'

export const UseCarrinhoContext = () => {
    const { carrinho, setCarrinho } = UseMyContext()

    // Adicionar produto
    function adicionarProduto(novoProduto) {
        const temOProduto = carrinho.some((itemDoCarrinho) => itemDoCarrinho.id === novoProduto.id);
        
        if (!temOProduto) {
          novoProduto.quantidade = 1;
          return setCarrinho((carrinhoAnterior) => [
            ...carrinhoAnterior,
            novoProduto,
          ]);
        }
    
        setCarrinho(carrinho.map(itemcart => {
          // Incrementando a quantidade caso o produto esteja no carrinho
          if(itemcart.id === novoProduto.id){
            itemcart.quantidade += 1
            return itemcart
          } 
          
          // retornando o produto do carrinho caso o id seja diferente
          return itemcart
        }))
        
    }

    // removerProduto
    function removerProduto(idProduto){
      // Buscando o produto que quero remover no carrinho
      const produto = carrinho.find((produto) => produto.id === idProduto)

      // Verificando se a quantidade do produto e igual a 1
      if(produto.quantidade === 1){

        // Removendo o produto do carrinho
        setCarrinho(carrinho.filter(produtoCart => produtoCart.id !== produto.id ))
        return
      }

      console.log(carrinho.map(itemCart => itemCart.id === produto.id ? itemCart.quantidade - 1 : itemCart))

      // Caso o produto tenha a quantidade superior a 1, diminuimos a quantidade em 1
      setCarrinho(carrinho.map(itemCart => {
        if(itemCart.id === produto.id){
          itemCart.quantidade -= 1
          return itemCart
        }

        return itemCart
      }))
      
    }

    // removerProdutoCarrinho
    function removerProdutoCarrinho(idProduto){
      setCarrinho(carrinho.filter((itemCart) => itemCart.id !== idProduto && itemCart))
    }

    return{
        carrinho,
        setCarrinho,
        adicionarProduto,
        removerProduto,
        removerProdutoCarrinho
    }
      
}