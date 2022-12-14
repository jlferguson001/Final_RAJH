import React, { useEffect, useState} from 'react'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'

 
 
 


const MensScreen = () => {
 
  const [products, setProducts] = useState(null)

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('/api/products/Mens')
      const json = await response.json()

      if (response.ok) {
        setProducts(json)
      }
    }

    fetchProducts()
  }, [])

  return (
    <>
      <h2>Men's Frames</h2>
      <Row>
        {products &&
          products.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))}
      </Row>
    </>
  )
}

export default MensScreen