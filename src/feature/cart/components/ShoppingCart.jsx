//import { useContext } from "react";
//import ShoppingCartContext from '@features/cart/contexts/ShoppingCartContext';
import { useShoppingCart } from '@features/cart';
import '@features/cart/styles/ShoppingCart.css';


function ShoppingCart({}){

  //const{text} = useContext(ShoppingCartContext)
  //const {text} = useShoppingCart();
  const {list} = useShoppingCart();
  return(
    <div className='shoppingCart'>
      <h3 className='shoppingCart__texto'>Seleccionados: {list.length}</h3>
      <button className='shoppingCart__buy'>Pagar</button>
    </div>
  )

}

export default ShoppingCart;