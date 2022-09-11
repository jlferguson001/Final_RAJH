import {createContext } from 'react'


export const ProductsContext = createContext()

export const ProductsContextProvider =({children}) => {

    return (
        <ProductsContext.Provider>
            {children}
        </ProductsContext.Provider>
    )
}