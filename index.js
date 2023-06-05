const express = require('express');
const routerAPI = require('./routes');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
   res.send('Hola mi primer server con express!')
})

app.get('/nueva-ruta', (req, res) => {
  res.send('Hola soy nueva ruta!')
})

routerAPI(app);

app.listen(port, () => {
  console.log(`Mi port: ${port}`)
})
