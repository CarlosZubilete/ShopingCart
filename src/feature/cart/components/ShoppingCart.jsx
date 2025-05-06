import { useContext } from "react";
import ShoppingCartContext from '@features/cart/contexts/ShoppingCartContext';

function ShoppingCart({}){

  const{text} = useContext(ShoppingCartContext)

  return(
    <div>
      <h3>Intrumento selecionado: {text}</h3>
      <button>Pagar</button>
    </div>
  )

}

export default ShoppingCart;