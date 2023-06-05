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
  res.status(201).json({
    message: 'created',
    data: body
  })
})

router.patch('/:id', (req, res) => {
  const { id } = req.params
  const body = req.body
  res.json({
    message: 'update partial',
    data: body,
    id
  })
})

router.delete('/:id', (req, res) => {
  const { id } = req.params
  res.json({
    message: 'deleted',
    id
  })
})

module.exports = router
