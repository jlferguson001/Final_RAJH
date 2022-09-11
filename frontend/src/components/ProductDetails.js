import ProductScreen from "../screens/ProductScreen"
import { Table } from "react-bootstrap"
import Product from "./Product"


const ProductDetails = ({product}) => {

    return (
      <div className='product-details'>
        <h4>{product.name}</h4>
        <p>
          <strong>BRAND:      </strong>{product.brand}
        </p>
        <p>
          <strong>CATEGORY:       </strong>{product.category}
        </p>
        <p>
          <strong>COLOR:      </strong>
          {product.color}
        </p>
        <p>
          <strong>PRICE:       </strong>
          ${product.price}
        </p>
        <p>
          <strong>ID:       </strong>
          {product._id}
        </p>
        <p>
          <strong>IMAGE:       </strong>
          {product.image}
        </p>
        <p>{product.createdAt}</p>
       

         
      </div>
    )
}
 

export default ProductDetails