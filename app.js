
const express = require('express');
require('dotenv').config()
const app = express();
app.get('/', (req, res) => {
  console.log('peticion recibida');
  res.status(200).send('<h1>fffff ggoggrecibida  mundo</h1>');
  
});
const PORT = process.env.PORT || 3000 ;
app.listen(PORT, () => {
  console.log(`Escuchando en el puerto ${PORT}`);
});