const express = require('express');
const cors = require('cors');
const routerAPI = require('./routes');

const { logErrors, errorHandler, BoomErrorHandler } = require('./middlewares/ErrorHandler');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

const whitelist = ['http://localhost:3000','https://myapp.com', 'http://localhost:8080'];
const options = {
  origin: (origin, callback) => {
    if(whitelist.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('No permitido'));
    }
  },
};
app.use(cors(options));

app.get('/api', (req, res) => {
   res.send('Hola mi primer server con express!')
})

app.get('/api/nueva-ruta', (req, res) => {
  res.send('Hola soy nueva ruta!')
})

routerAPI(app);

app.use(logErrors);
app.use(BoomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Mi port: ${port}`)
})
