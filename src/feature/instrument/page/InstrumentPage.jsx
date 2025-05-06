import InsrumentList from "@features/instrument/components/InstrumentList"; 
import '@features/instrument/styles/InstrumentPage.css';

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