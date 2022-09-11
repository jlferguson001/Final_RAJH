import { useEffect, useState } from "react"
import ProductDetails from '../components/ProductDetails'
import ProductForm from "../components/ProductForm"

const ProductListScreen = () => {

  const [products, setProducts] = useState(null)
  
    useEffect(() => {
      
      const fetchProducts = async () => {
        const response = await fetch('/api/products/productslist')
        const json = await response.json()
  
        if (response.ok) {
          setProducts(json)
        }
      }
      fetchProducts()
    }, [])  
  
    return (
      <div className = 'home'>
        <div className= 'products'>
          {products && products.map((product) => (
            <ProductDetails key= {product._id} product={product}/>
          ))}
        </div>
        <ProductForm />
      </div>
    )
}
export default ProductListScreen
 
  
