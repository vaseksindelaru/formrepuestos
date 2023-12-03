require('dotenv').config()
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('<h1>peticion recibida con nodemon<h1>');
});
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Escuchando en el puerto ${PORT}`);
});