const express=require('express');
const app = express.Router();
const Ventas=require('../modeloBD/venta');
const Ingredientes=require('../modeloBD/ingrediente');
const Productos=require('../modeloBD/producto');
const Usuarios=require('../modeloBD/usuario'); 
const Especial=require('../modeloBD/especial'); 
app.get('/',(req,res)=>{
    Productos.find()
    .then((producto)=>{
        Usuarios.find({_id:'6241b85e9815c496aa18fb97'})
        .then((usuarios)=>{
            res.render('ordenar',{producto, usuarios})
        })
        .catch((err)=>{
            res.send("Error "+err)
        })
    })
});
module.exports=app;