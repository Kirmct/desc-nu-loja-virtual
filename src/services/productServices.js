
const saveCartProduct = async (cartProducts) => {
  localStorage.setItem('cartProducts', JSON.stringify(cartProducts)); 
}

export const getProducts = async () => {
  return JSON.parse(localStorage.getItem('cartProducts')) || [];
};


export const addProductInCart = async (productId, name, price, image) => {
  const cartProducts = await getProducts();

  const hasAdd = cartProducts.some(product => product.id === productId);

  if(!hasAdd){
    const newProduct = {
      id: productId,
      price,
      image,
      name: name,
      quantity: 1,
    };
    //adding new product to cart
    cartProducts.push(newProduct);
    await saveCartProduct(cartProducts);
  }
  else{ const cartIndex = cartProducts.findIndex(product => product.id === productId);
    cartProducts[cartIndex].quantity++
    await saveCartProduct(cartProducts);
  }
  return cartProducts;
}

export const removeProductQuantity = async (productId) => {
  const products = await getProducts();
  const productIndex = products.findIndex(product => product.id === productId);
  if(products[productIndex].quantity > 0){
    products[productIndex].quantity--;
  } 
  console.log("aaa " + products[productIndex].quantity)

  await saveCartProduct(products);
  return products;
}

export const removeAllProduct = async (productId) =>{
  const products = await getProducts();
  const updatedProduct = products.filter((product) => product.id !== productId);
  await saveCartProduct(updatedProduct);
  return updatedProduct;

}

export const getCards = async () => {
  return [
    {
      id: 123,
      image: "https://picsum.photos/500",
      title: "Product 1",
      quantity: 0,
      price: 200,
      description: "very nice product",
      hasAdd: false,
    },
    {
      id: 234,
      image: "https://picsum.photos/500",
      title: "Product 2",
      quantity: 0,
      price: 300,
      description: "very nice product",
      hasAdd: false,
    },
    {
      id: 567,
      image: "https://picsum.photos/500",
      title: "Product 3",
      quantity: 0,
      price: 500,
      description: "very nice product",
      hasAdd: false,
    },
  ]
}