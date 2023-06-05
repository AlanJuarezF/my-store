const express = require('express');
const routerAPI = require('./routes');

const { logErrors, errorHandler, BoomErrorHandler } = require('./middlewares/ErrorHandler');

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
   res.send('Hola mi primer server con express!')
})

app.get('/nueva-ruta', (req, res) => {
  res.send('Hola soy nueva ruta!')
})

routerAPI(app);

app.use(logErrors);
app.use(BoomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Mi port: ${port}`)
})
