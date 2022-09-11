import React, { useEffect, useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import Developer from '../components/Developer'
import developers from '../developers'
import Product from '../components/Product'

const HomeScreen = () => {
  const [products, setProducts] = useState(null)

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('/api/products')
      const json = await response.json()

      if (response.ok) {
        setProducts(json)
      }
    }

    fetchProducts()
  }, [])

  return (
    <>
      <Row>
        {products && products.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))}
      </Row>
      
      <h1>Your Developers</h1>
      <Row>
        {developers.map((developer) => (
          // number of columns per screen
          <Col key={developer._id} sm={12} md={6} lg={4} xl={3}>
            <Developer developer={developer} />
          </Col>
        ))}
      </Row>
    </>
  )
}

export default HomeScreen
