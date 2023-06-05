const express = require('express')
const productsRouter = require('./ProductsRouter')
const usersRouter = require('./UsersRouter')
const categoriesRouter = require('./CategoriesRouter')

function routerAPI(app) {
  const router = express.Router()
  app.use('/api/v1', router)
router.use('/products', productsRouter);
router.use('/users', usersRouter);
router.use('/categories', categoriesRouter);
}

module.exports = routerAPI;
