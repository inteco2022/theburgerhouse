const express=require('express');
const app=express.Router();
const Productos=require('../modeloBD/producto');
const Especiales=require('../modeloBD/especial');
const Usuarios=require('../modeloBD/usuario');
const Ingredientes=require('../modeloBD/ingrediente');
//----------------------------------------------------
                //ParaProbar los ejs

app.get('/cliente/carrito',(req,res)=>{
    res.render('compra')
})
app.get('/hola2',(req,res)=>{
    Productos.find({tipo:1})
    .then((producto)=>{
        Productos.find({tipo:3})
        .then((especial)=>{
            Productos.find({tipo:2})
            .then((bebidas)=>{
                res.render('menu2',{producto,especial,bebidas})
            })
        })
        .catch((err)=>{
            res.send("ERROR"+err)
        })
    })
    .catch((err)=>{
        res.send('Fallo' +err)
    })
    
})

//
app.get('/menu',(req,res)=>{
    Productos.find({tipo:1})
    .then((producto)=>{
        Productos.find({tipo:3})
        .then((especial)=>{
            Productos.find({tipo:2})
            .then((bebidas)=>{
                res.render('menu',{producto,especial,bebidas})
            })
        })
        .catch((err)=>{
            res.send("ERROR"+err)
        })
    })
    .catch((err)=>{
        res.send('Fallo' +err)
    })

});

//Productos
app.get('/theburgerhouse/portal/productos',(req,res)=>{
    Usuarios.find({_id:'6241b85e9815c496aa18fb97'})
    .then((usuario)=>{
        Productos.find()
        .then((productos)=>{
            res.render('productos',{productos,usuario})
        })
    })
    .catch((err)=>{
        res.send("Error "+ err)
    }) 
})

app.post('/registrarProducto',(req,res)=>{
    const producto={
        nombre:req.body.nombre,
        foto:req.body.foto,
        descripcion:req.body.descripcion,
        precio:req.body.precio,
        tipo:req.body.tipo,
        estado:true
    }
    Productos.create(producto)
    .then(()=>{
        res.redirect('/theburgerhouse/portal/producto')
    })
});
app.get('/altaproducto/:id',(req,res)=>{
    var pro={
        estado:true
    }
    Productos.findOneAndUpdate({_id:req.params.id},pro)
    .then(()=>{
        res.redirect('/theburgerhouse/portal/producto');
    })
    .catch((err)=>{
        res.status(400).send("Error al modificar el usuario "+err);
    });
})
app.get('/bajaproducto/:id',(req,res)=>{
    var pro={
        estado:false
    }
    Productos.findOneAndUpdate({_id:req.params.id},pro)
    .then(()=>{
        res.redirect('/theburgerhouse/portal/producto');
    })
    .catch((err)=>{
        res.status(400).send("Error al modificar el usuario "+err);
    });
})

//Almacen

app.get('/theburgerhouse/portal/almacen',(req,res)=>{
    Usuarios.find({_id:'6241b85e9815c496aa18fb97'})
    .then((usuario)=>{
        Ingredientes.find()
        .then((ingredientes)=>{
            res.render('ingredientes',{ingredientes,usuario})
        })
    })
    .catch((err)=>{
        res.send("Error "+ err)
    }) 
})
app.get('/theburgerhouse/ingrediente/agregar',(req,res)=>{
    res.render('agIngrediente')
});
app.post('/registrarIngrediente',(req,res)=>{
    const ingrediente={
        nombre:req.body.nombre,
        cantidad:req.body.cantidad,
        foto:req.body.foto,
        estado:true
    }
    Ingredientes.create(ingrediente)
    .then(()=>{
        res.redirect('/theburgerhouse/portal/almacen')
    })
});
app.get('/altaingrediente/:id',(req,res)=>{
    var ing={
        estado:true
    }
    Ingredientes.findOneAndUpdate({_id:req.params.id},ing)
    .then(()=>{
        res.redirect('/theburgerhouse/portal/almacen');
    })
    .catch((err)=>{
        res.status(400).send("Error al modificar el usuario "+err);
    });
})
app.get('/bajaingrediente/:id',(req,res)=>{
    var pro={
        estado:false
    }
    Ingredientes.findOneAndUpdate({_id:req.params.id},pro)
    .then(()=>{
        res.redirect('/theburgerhouse/portal/almacen');
    })
    .catch((err)=>{
        res.status(400).send("Error al modificar el usuario "+err);
    });
})


//Usuarios
app.get('/altausuario/:id',(req,res)=>{
    var user={
        estado:true
    }
    Usuarios.findOneAndUpdate({_id:req.params.id},user)
    .then(()=>{
        res.redirect('/theburgerhouse/portal');
    })
    .catch((err)=>{
        res.status(400).send("Error al modificar el usuario "+err);
    });
})
app.get('/bajausuario/:id',(req,res)=>{
    var user={
        estado:false
    }
    Usuarios.findOneAndUpdate({_id:req.params.id},user)
    .then(()=>{
        res.redirect('/theburgerhouse/portal');
    })
    .catch((err)=>{
        res.status(400).send("Error al modificar el usuario "+err);
    });
})
app.get('/miperfil/editar/:id',(req,res)=>{
    console.log(req.params.id)
    Usuarios.find({_id:req.params.id})
    .then((usuarios)=>{ 
        console.log(usuarios)
        res.render('editarPerfil',{usuarios});
    })
    .catch((err)=>{
        console.log("Error al buscar el usuario "+err);
    });
});

//Productos
app.get('/theburgerhouse/producto/agregar',(req,res)=>{
    res.render('agProducto')
})
app.get('/theburgerhouse/portal/editarproducto/:id',(req,res)=>{
 
    Productos.find({_id:req.params.id})
    .then((producto)=>{ 
        console.log(producto)
        res.render('editarProducto',{producto});
    })
    .catch((err)=>{
        console.log("Error al buscar el usuario "+err);
    });
});
app.post('/editarproducto/:id',(req,res)=>{
    const producto={
        nombre:req.body.nombre,
        descripcion:req.body.descripcion,
        precio:req.body.precio,
        tipo:req.body.tipo,
        foto:req.body.foto,
    }
    Productos.findOneAndUpdate({_id:req.params.id},producto)
    .then(()=>{
        res.redirect('/theburgerhouse/portal/producto')
    })
    .catch((err)=>{
        res.send('No se pudo actualizar la informacion. Error: '+err+'\nSi el error persiste, por favor comunicate con el administrador de la pagina')
    })
})
module.exports=app;