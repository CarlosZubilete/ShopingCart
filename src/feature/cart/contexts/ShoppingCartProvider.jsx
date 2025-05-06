import { useState } from "react";
import ShoppingCardContext from "./ShoppingCartContext";


function ShoppingCartProvider ({children}){
  // 
  const[text,setText] = useState('')  
  // 
  const[list,setList] = useState([]);

  const addDocumento = (document) => {
    setList([...list,document]);
  }

  return(<>
    <ShoppingCardContext.Provider value={{list,addDocumento}}>
      {children}
    </ShoppingCardContext.Provider>
  
  </>)
}

export default ShoppingCartProvider;

export{ShoppingCartProvider}