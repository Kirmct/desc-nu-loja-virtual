import React from 'react'
import { Card } from '../../components/Card/Card'
import { addProducInCartAction, fetchCartProductsAction, removeOneProductQuantityAction } from '../../store/actions'
import { useAppContext } from '../../store/AppContext'

export const CardContainer = (props) => {

  const {dispatch} = useAppContext()

  

  const handleClick = async (productId, name, price, image) =>{
    console.log("Clicou em " + productId + name)
    addProducInCartAction(dispatch, productId, name, price, image).then(() => fetchCartProductsAction(dispatch))
  
  }

  const onRemoveClick = async (productId) => {
    console.log("Removendo " + productId)
    removeOneProductQuantityAction(dispatch, productId).then(() => fetchCartProductsAction(dispatch))
    
  }

  return (
    <Card {...props} onClick={handleClick} onRemoveClick={onRemoveClick}/>
  )
}
