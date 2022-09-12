import { ProductsContext } from "../context/ProductContext";
import { useContext } from "react";

export const useProductsContext = () => {
    const context = useContext(ProductsContext)

    if(!context){
        throw Error('useProductsContext must be used in side a ProductsContextProvider')
    }
    return context
}