import { useEffect } from "react"
import{useProductsContext} from '../hooks/useProductsContext'

import ProductDetails from '../components/ProductDetails'
import ProductForm from "../components/ProductForm"
import EditForm from "../components/EditForm"

const ProductListScreen = () => {
  const {products, dispatch} = useProductsContext()
  // const [products, setProducts] = useState(null)
  
    useEffect(() => {
      
      const fetchProducts = async () => {
        const response = await fetch('/api/products/productslist')
        const json = await response.json()
  
        if (response.ok) {
          // setProducts(json)
          dispatch({type: 'SET_PRODUCTS', payload: json})
        }
      }
      fetchProducts()
    }, [dispatch])  
  
    return (
      <div className = 'home'>
        <div className= 'products'>
          {products && products.map((product) => (
            <ProductDetails key= {product._id} product={product}/>
          ))}
        </div>
        <div>
        <ProductForm />
        <EditForm />
        </div>
      </div>
    )
}
export default ProductListScreen
 
  
