const productsRouter = require('./ProductsRouter')
const usersRouter = require('./UsersRouter')
const categoriesRouter = require('./CategoriesRouter')

function routerAPI(app) {
app.use('/products', productsRouter);
app.use('/users', usersRouter);
app.use('/categories', categoriesRouter);
}

module.exports = routerAPI;
