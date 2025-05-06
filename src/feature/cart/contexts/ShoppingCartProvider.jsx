import { useState } from "react";
import ShoppingCardContext from "./ShoppingCartContext";


function ShoppingCartProvider ({children}){
  const[text,setText] = useState('Texto Inicializado')  
  
  return(<>
    <ShoppingCardContext.Provider value={{text,setText}}>
      {children}
    </ShoppingCardContext.Provider>
  
  </>)
}

export default ShoppingCartProvider;