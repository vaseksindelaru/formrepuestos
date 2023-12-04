
const express = require('express');
require('dotenv').config();
const path = require('path');
const app = express();
const mongoose = require('mongoose');


mongoose.connect(`mongodb+srv://vaseksindelaru:${process.env.MONGO_DB_PASS}
@formrepudev.miu7gno.mongodb.net/?retryWrites=true&w=majority`)

.then((result) => {
  app.listen(PORT, () => {console.log(`Escuchando en el puerto ${PORT}`);});
    console.log('mongoDB conexion exitosa')})
.catch((err)=>console.log(err));

const piezaSchema = mongoose.Schema({
name: {type:String, required:true},
price: Number,},
{timestamps:true}
);
const Pieza = mongoose.model('Pieza',piezaSchema,'piezas');

app.use(express.json());
app.post('/api/1/v1/formrepu', (req, res) => {
  const newPieza = new Pieza(req.body)
    //name: req.body.name,
    //price: req.body.price;
    newPieza.save()
    .then((result) => {res.status(201).json({ok:true})})
    .catch((err) => {console.log(err);});
//console.log('peticion recibida')
//console.log({body:req.body})
})

  app.use(express.static(path.join(__dirname + '/public')))
 


// res.status(200).sendFile('index.html',{root:__dirname});;

const PORT = process.env.PORT ;
