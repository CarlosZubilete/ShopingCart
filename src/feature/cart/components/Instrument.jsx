import '@features/cart/styles/Instrument.css';

function Instrument({name, price,img}){
  return(<div className='instrument'>
    <p className='instrument__name'>{name}</p>
    <img src={img} alt={`imagen de ${name}`} className='instrument__img'/>
    <div className='instrument__buy'>
      <p className='instrument__buy__price'>${price}</p>
      <button className='instrument__buy__button'>Comprar</button>
    </div>

  </div>
)
}

export default Instrument;

