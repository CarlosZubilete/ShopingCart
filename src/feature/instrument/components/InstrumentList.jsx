import Insrument from "@features/instrument/components/Instrument";
import '@features/instrument/styles/InstrumentList.css';

function InsrumentList({document}){
  return (<div className='instrumentList'>
    <Insrument 
      name={document.name} 
      price={document.price} 
      img={document.img}/>
  </div>
  )
}

export default InsrumentList; 