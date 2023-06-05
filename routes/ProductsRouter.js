const express = require('express')

const ProductService =require('./../services/ProductService')

const router = express.Router()

const service = new ProductService()

router.get('/', (req, res) => {
  const products = service.findProduct()
  res.json(products)
})

//poner esepcifico antes de los dinamicos

router.get('/filter', (req, res) => {
  res.send('Yo soy un filter')
})



router.get('/:id' , (req, res) => {
  const { id } = req.params
  const product = service.findOneProduct( id )
  res.json(product)
})

router.post('/', (req, res) => {
  const body = req.body
  const newProduct = service.createProduct(body)
  res.status(201).json(newProduct)
})

router.patch('/:id', (req, res) => {
  const { id } = req.params
  const body = req.body
  const product = service.updateProduct(id, body)
  res.json(product)
})

router.delete('/:id', (req, res) => {
  const { id } = req.params
  const rta = service.deleteProduct(id)
  res.json(rta)
})

module.exports = router
