import { useProductsContext } from "../hooks/useProductsContext"
import {Button} from 'react-bootstrap'

const ProductDetails = ({product}) => {
    const {dispatch}= useProductsContext()
    
    const handleClick = async() => {
      const response = await fetch('/api/products/' + product._id, {
        method: 'DELETE'
      })
      const json = await response.json()

      if(response.ok){
        dispatch({type: 'DELETE_PRODUCT', payload: json})
      }
    }
    return (
      <div className='product-details'>
        <h4>{product.name}</h4>
        <p>
          <strong>BRAND: </strong>
          {product.brand}
        </p>
        <p>
          <strong>CATEGORY: </strong>
          {product.category}
        </p>
        <p>
          <strong>COLOR: </strong>
          {product.color}
        </p>
        <p>
          <strong>PRICE: </strong>${product.price}
        </p>
        <p>
          <strong>ID: </strong>
          {product._id}
        </p>
        <p>
          <strong>IMAGE: </strong>
          {product.image}
        </p>
        <p>{product.createdAt}</p>
        <span onClick={handleClick}>
          <Button variant='danger' className='btn-sm'>
            <i className='fas fa-trash'></i>
          </Button>
          <br />
          <Button variant='light' className='btn-sm'>
            <i className='fas fa-edit'></i>
          </Button>
        </span>
      </div>
    )
}
 

export default ProductDetails