const express=require('express');
const app = express.Router();
const Ingredientes=require('../modeloBD/ingrediente');
const Producto=require('../modeloBD/producto');
const Ventas=require('../modeloBD/venta');
const Usuarios=require('../modeloBD/usuario');


module.exports=app;