const express = require('express')

const ProductService =require('./../services/ProductService')
const ValidatorHandler = require('./../middlewares/ValidatorHandler')
const { createProductSchema, getProductSchema, updateProductSchema} = require('./../schemas/ProductSchema')

const router = express.Router()

const service = new ProductService()

router.get('/', async (req, res) => {
  const products = await service.findProduct()
  res.json(products)
})

//poner esepcifico antes de los dinamicos

router.get('/filter', (req, res) => {
  res.send('Yo soy un filter')
})



router.get('/:id',
  ValidatorHandler(getProductSchema, 'params'),
  async (req, res, next) => {
  try{
    const { id } = req.params
    const product = await service.findOneProduct( id )
    res.json(product)
  }catch(error){
    next(error)
  }
})

router.post('/',
ValidatorHandler(createProductSchema, 'body'),
  async (req, res) => {
  const body = req.body
  const newProduct = await service.createProduct(body)
  res.status(201).json(newProduct)
})

router.patch('/:id',
  ValidatorHandler(getProductSchema, 'params'),
  ValidatorHandler(updateProductSchema, 'body'),
  async (req, res, next) => {
  try {
    const { id } = req.params
    const body = req.body
    const product = await service.updateProduct(id, body)
    res.json(product)
  } catch (error) {
    next(error)
  }
})

router.delete('/:id', async (req, res) => {
  const { id } = req.params
  const rta = await service.deleteProduct(id)
  res.json(rta)
})

module.exports = router
