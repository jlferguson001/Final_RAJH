const express = require('express')
const Product = require('../models/productModel')

const router = express.Router()

//Get all products
router.get('/', (req, res) => {
  res.json({ message: 'GET all products' })
})

//Get all Mens
router.get('/Mens', (req, res) => {
  res.json({ message: 'GET all Mens products' })
})

//Get all Womens
router.get('/Womens', (req, res) => {
  res.json({ message: 'GET all Womens products' })
})

//Get all Childrents
router.get('/Childrens', (req, res) => {
  res.json({ message: 'GET all Childrens products' })
})

//Get one product
router.get('/:id', (req, res) => {
  res.json({ message: 'Get a single product' })
})

//post/add new product
router.post('/', async (req, res) => {
  const {
    name,
    image,
    description,
    brand,
    category,
    color,
    price,
    countInStock,
    rating,
    numReviews,
  } = req.body

  try {
    const product = await Product.create({
      name,
      image,
      description,
      brand,
      category,
      color,
      price,
      countInStock,
      rating,
      numReviews,
    })
    res.status(200).json(product)
  } catch (error) {
    res.status(400).json({error: error.message})
  }
   
})

//delete product
router.delete('/:id', (req, res) => {
  res.json({ message: 'Delete a single product' })
})

//edit/update product
router.patch('/:id', (req, res) => {
  res.json({ message: 'Update a single product' })
})

module.exports = router
