import * as types from "./types"

export const reducer = (state, action) => {
  switch (action.type) {
    // carregando os cards que estao salvos 
    case types.fetchCardsSuccesstType:
      return {
        ...state, cards: action.payload
      }
    //carregando carrinho
    case types.fetchCartProductsSuccessType:
      return{
        ...state, cartProducts: action.payload
      }
    //adicionando item no carrinho
    case types.addProductInCartSuccessAction:
      return {
        ...state, cartProducts: action.payload,
      }
    
    //removendo 1 item do carrinho
    case types.removeOneProductQuantitySuccessType:
      return {
        ...state, cartProducts: action.payload
      }

    //removendo todos os produtos de um item do carrinho
    case types.removeAllProductQuantitySuccsessType:
      return {
        ...state, cartProducts: action.payload
      }

    // casso default
    default: 
    return {
      ...state
    }
  }
}