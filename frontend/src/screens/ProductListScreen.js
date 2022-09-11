import React, { useEffect, useState } from 'react'
import { Table, Button } from 'react-bootstrap'

import ProductForm from '../components/ProductForm'

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
    <>
      <h2>Admin Product Review</h2>
      <Table className='table-sm'>
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>IMAGE</th>
            <th>BRAND</th>
            <th>CATEGORY</th>
            <th>COLOR</th>
            <th>PRICE</th>
          </tr>
        </thead>
        <tbody>
          {products &&
            products.map((products) => (
              <tr key={products._id}>
                <td>{products._id}</td>
                <td>{products.name}</td>
                <td>{products.image}</td>
                <td>{products.brand}</td>
                <td>{products.category}</td>
                <td>{products.color}</td>
                <td>${products.price}</td>

                <td>
                  {/* <LinkContainer to={`/admin/product/${product._id}/edit`}>
                    <Button variant='light' className='btn-sm'>
                      <i className='fas fa-edit'></i>
                    </Button>
                  </LinkContainer>
                  <Button variant='danger' className='btn-sm'>
                    <i className='fas fa-trash'></i>
                  </Button> */}
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
      <ProductForm />
    </>
  )
}

export default ProductListScreen

 
