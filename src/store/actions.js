import { addProductInCart, getCards, getProducts, removeAllProduct, removeProductQuantity } from "../services/productServices"
import * as types from "./types"

// estamos carregando os dados dos productos 
export const fetchCardsInitAction = () =>{
  return {type: types.fetchCardsInitType}
}

export const fetchCardsSuccesstAction = (cardsData) =>{
  return {type: types.fetchCardsSuccesstType, payload: cardsData}
}

export const fetchCardsAction = async (dispatch) => {
  dispatch(fetchCardsInitAction());
  const cardsData = await getCards();
  dispatch(fetchCardsSuccesstAction(cardsData))
}

//carregando o carrinho de compras
export const fetchCartProductsInitTypeAction = () => {
  return {type: types.fetchCartProductsInitType}

}

export const fetchCartProductsSuccessTypeAction = (cartProducts) => {
  return {types: types.fetchCartProductsSuccessType, payload: cartProducts}
}

export const fetchCartProductsAction = async (dispatch) => {
  const cartProductsData = await getProducts();
  dispatch(fetchCartProductsSuccessTypeAction(cartProductsData))
}

// adicionando items ao carrinho
export const addProductInCartInitAction = () =>{
  return { type: types.addProductInCartInitQuantityType}
}

export const addProductInCartSuccessAction = (productData) =>{
  return {type: types.addProductInCartSuccessQuantityType, payload: productData}
}

export const addProducInCartAction = async (dispatch, productId, name, price, image) =>{
  const productData = await addProductInCart(productId, name , price, image);
  dispatch(addProductInCartSuccessAction(productData))
}


// removendo 1 item da quantidade total no cart
export const removeOneProductQuantityInitAction = () =>{
  return {type: types.removeOneProductQuantityInitType}
}

export const removeOneProducSuccsessAction = (allProducts) =>{
  return {type: types.removeOneProductQuantitySuccessType, payload: allProducts}
}

export const removeOneProductQuantityAction = async (dispatch, productId) =>{
  dispatch(removeOneProductQuantityInitAction());
  const allProducts = await removeProductQuantity(productId);
  dispatch(removeOneProducSuccsessAction(allProducts))
}

// removendo o item do cart
export const removeAllProductQuantityInitAction = () =>{
  return {type: types.removeAllProductQuantityInitType}
}

export const removeAllProducSuccsessAction = (allProducts) =>{
  return {type: types.removeAllProductQuantityInitType, payload: allProducts}
}

export const removeAllProductQuantityAction = async (dispatch, productId) =>{
  dispatch(removeAllProductQuantityInitAction());
  const allProducts = await removeAllProduct(productId);
  dispatch(removeAllProducSuccsessAction(allProducts))
}