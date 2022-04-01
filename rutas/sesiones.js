const express=require('express');
const app=express.Router();
const Usuarios=require('../modeloBD/usuario');
const Productos=require('../modeloBD/producto');
const Especiales=require('../modeloBD/especial');
//<<      USUARIO ORDINARIO      >>\\
app.get('/portal',(req,res)=>{
    Usuarios.find()
    .then((usuarios)=>{
        console.log(usuarios)
        res.render('portalA',{usuarios})
    })

});
app.get('/registrate',(req,res)=>{
    res.render('registrateU')
});
app.post('/registrar',(req,res)=>{
    const usuario={
        nombre:req.body.nombre,
        direccion:req.body.direccion,
        telefono:req.body.telefono,
        celular:req.body.celular,
        correo:req.body.correo,
        contraseña:req.body.contraseña,
        venta:'0',
        estado:true,
        foto:req.body.foto
    }
    Usuarios.create(usuario)
    .then(()=>{
        res.redirect('/theburgerhouse/portal')
    })
    .catch((err)=>{
        res.send("Ocurrio un error: "+err+" Por favor comunicate con el administrador de la pagina.");
    })
})
app.get('/editar/:id',(req,res)=>{
    console.log(req.params.id)
    Usuarios.find({_id:req.params.id})
    .then((usuarios)=>{ 
        console.log(usuarios)
        res.render('editarU',{usuarios});
    })
    .catch((err)=>{
        console.log("Error al buscar el usuario "+err);
    });
});

module.exports=app;