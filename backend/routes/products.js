const express = require('express')
const { createProduct, getProduct, getProducts, getProductsMens, getProductsWomens, getProductsChildrens, deleteProduct, updateProduct, getProductsList } = require('../controllers/productController')


const router = express.Router()

//Get all products
router.get('/', getProducts )

//Get all products for list
router.get('/productslist', getProductsList )

//Get all Mens
router.get('/Mens', getProductsMens)

//Get all Womens
router.get('/Womens', getProductsWomens )

//Get all Childrens
router.get('/Childrens', getProductsChildrens)

//Get one product
router.get('/:id', getProduct)

//post/add new product
router.post('/', createProduct)

//delete product
router.delete('/:id', deleteProduct )

//edit/update product
router.patch('/:id', updateProduct)

module.exports = router
