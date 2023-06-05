const express = require('express');
const cors = require('cors');
const routerAPI = require('./routes');

const { logErrors, errorHandler, BoomErrorHandler } = require('./middlewares/ErrorHandler');

const app = express();
const port = 3000;

app.use(express.json());

const whitelist = ['http://localhost:8080', 'https://myapp.com'];
const options = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin)) {
      callback(null, true);
    }else {
      callback(new Error('No permitido'));
    }
  },
};
app.use(cors(options));

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
