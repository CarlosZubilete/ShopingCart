import { createContext, useContext } from "react";

// Variable contexto
const ShoppingCardContext = createContext();

// Agregamos una función para  
function useShoppingCart(){
  // 
  const context = useContext(ShoppingCardContext)
  
  // si no hay un contexto significa que no estas adentro de un proveedor 
  if(!context){
    throw new Error('useShoppingCart debe ser usado dentro de un ShoppingCartProvider')
  }

  return context
}

export default ShoppingCardContext;

export{
  useShoppingCart,
  ShoppingCardContext
}