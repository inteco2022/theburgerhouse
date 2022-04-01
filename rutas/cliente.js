const express=require('express');
const app=express.Router();
const Productos=require('../modeloBD/producto');
const Especiales=require('../modeloBD/especial');
//----------------------------------------------------
app.get('/portal',(req,res)=>{
    res.render('portalCliente')
});
app.get('/comprar',(req,res)=>{
    Productos.find({tipo:1})
    .then((producto)=>{
        res.render('index',{producto})
    })
    .catch((err)=>{
        res.send('Error '+err)
    })
}) 
module.exports=app;