import { useEffect, useState } from "react";
import { useAppContext } from "../../store/AppContext";
import { ListGroup } from "../../components/ListGroup/ListGroup";
import { fetchCartProductsAction, removeAllProductQuantityAction } from "../../store/actions";

export const Carrinho = () => {
  const { state, dispatch } = useAppContext();
  const [cartProductsLength, setCartProductsLength] = useState(null);
  const [cartProductsAc, setCartProductsAc] = useState([]);
  const [total, setTotal] = useState(0);

  

  useEffect(() => {
    setCartProductsLength(() =>state.cartProducts.length);
    setCartProductsAc(() => state.cartProducts);

  }, [state.cartProducts]);

  useEffect(() => {
    const newTotal = cartProductsAc.reduce(
      (soma, product) => soma + product.price * product.quantity,
      0
    );
    setTotal(()=> newTotal);
  }, [cartProductsAc]);

  const handleRemoveItem = (id) => {
    console.log("Removing item " + id);
    removeAllProductQuantityAction(dispatch, id)
      .then(() => fetchCartProductsAction(dispatch))
    
  };

  return (
    <div>
      <h2>Carrinho de compras</h2>
      {cartProductsLength < 1 ? (
        <h4>Carrinho Vazio</h4>
      ) : (
        <>
          {cartProductsAc.map((cartProduct) => (
            <ListGroup
              key={cartProduct.id}
              id={cartProduct.id}
              name={cartProduct.name}
              price={cartProduct.price}
              quantity={cartProduct.quantity}
              onClick={handleRemoveItem}
            />
          ))}
          <h4 className="my-4">Total: R$ {total}</h4>
        </>
      )}
    </div>
  );
};
