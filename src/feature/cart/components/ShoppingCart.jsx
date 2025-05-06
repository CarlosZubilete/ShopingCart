//import { useContext } from "react";
//import ShoppingCartContext from '@features/cart/contexts/ShoppingCartContext';
import { useShoppingCart } from '@features/cart/contexts';

function ShoppingCart({}){

  //const{text} = useContext(ShoppingCartContext)
  const {text} = useShoppingCart();
  return(
    <div>
      <h3>Intrumento selecionado: {text}</h3>
      <button>Pagar</button>
    </div>
  )

}

export default ShoppingCart;