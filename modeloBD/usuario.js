const mongoose=require('mongoose');
const usuarioSchema=new mongoose.Schema({
    nombre:{
        type:String,
        required:true
    },
    direccion:{
        type:String,
        required:true
    },
    telefono:{
        type:Number,
        required:true
    },
    celular:{
        type:Number,
        required:true
    },
    correo:{
        type:String,
        required:true
    },
    contraseña:{
        type:String,
        required:true
    },
    venta:{
        type:Number,
        required:true
    },
    estado:{
        type:Boolean,
        required:true
    },
    foto:{
        type:String,
        required:true
    }

});
module.exports=mongoose.model('usuario',usuarioSchema);
