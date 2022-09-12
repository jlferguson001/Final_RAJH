import { useProductsContext } from "../hooks/useProductsContext"
import {Button, Table} from 'react-bootstrap'

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
      <Table striped bordered hover variant='light' responsive='md' attribute='data-align'>
        <thead>
          <tr>
            <th >ID</th>
            <th >Name</th>
            <th>Brand</th>
            <th>Category</th>
            <th>Color Name</th>
            <th>Price</th>
             
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{product._id}</td>
            <td>{product.name}</td>
            <td>{product.brand}</td>
            <td>{product.category}</td>
            <td>{product.color}</td>
            <td>${product.price}</td>
            
            <td>
              <span onClick={handleClick}>
                <Button variant='danger' className='btn-sm'>
                  <i className='fas fa-trash'></i>
                </Button>
              </span>
            </td>
          </tr>
        </tbody>
      </Table>
      // <div className='product-details'>
      //   <h4>{product.name}</h4>
      //   <p>
      //     <strong>BRAND: </strong>
      //     {product.brand}
      //   </p>
      //   <p>
      //     <strong>CATEGORY: </strong>
      //     {product.category}
      //   </p>
      //   <p>
      //     <strong>COLOR: </strong>
      //     {product.color}
      //   </p>
      //   <p>
      //     <strong>PRICE: </strong>${product.price}
      //   </p>
      //   <p>
      //     <strong>ID: </strong>
      //     {product._id}
      //   </p>
      //   <p>
      //     <strong>IMAGE: </strong>
      //     {product.image}
      //   </p>
      //   <p>{product.createdAt}</p>
      //
      //     <br />
      //
      //   </span>
      // </div>
    )
}
 

export default ProductDetails