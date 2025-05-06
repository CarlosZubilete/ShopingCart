//import { useContext } from "react";
//import ShoppingCartContext from '@features/cart/contexts/ShoppingCartContext';
import { useShoppingCart } from '@features/cart';
import '@features/cart/styles/ShoppingCart.css';


function ShoppingCart({}){

  //const{text} = useContext(ShoppingCartContext)
  const {text} = useShoppingCart();
  return(
    <div className='shoppingCart'>
      <h3 className='shoppingCart__texto'>Intrumento selecionado: {text}</h3>
      <button className='shoppingCart__buy'>Pagar</button>
    </div>
  )

}

export default ShoppingCart;