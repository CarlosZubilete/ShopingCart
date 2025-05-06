import '@features/instrument/styles/Instrument.css';
//import { useContext } from 'react';
//import ShoppingCartContext from '@features/cart/contexts/ShoppingCartContext';
import { useShoppingCart } from '@features/cart/contexts';

function Instrument({name, price,img}){

  //const {setText} = useContext(ShoppingCartContext);
  
  const {setText} = useShoppingCart();

  return(<div className='instrument'>
    <p className='instrument__name'>{name}</p>
    <img src={img} alt={`imagen de ${name}`} className='instrument__img'/>
    <div className='instrument__buy'>
      <p className='instrument__buy__price'>${price}</p>
      <button className='instrument__buy__button' 
      onClick={()=>setText(name)}>Agregar</button>
    </div>

  </div>
)
}

export default Instrument;

