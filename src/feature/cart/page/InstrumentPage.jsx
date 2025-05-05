import InsrumentList from "@features/cart/components/InstrumentList"; 
import '@features/cart/styles/InstrumentPage.css';

function InstrumentPage({collection}){
  return <div className='instrumentPage'>
    {
      collection.map((item) => 
        <InsrumentList key={item._id} document={item} />
      )
    }
  </div>
}

export default InstrumentPage; 