const mongoose=require('mongoose');
const productoSchema=new mongoose.Schema({
    nombre:{
        type:String,
        required:true
    },
    foto:{
        type:String,
        required:true
    },
    descripcion:{
        type:String,
        required:true
    },
    precio:{
        type:Number,
        required:true
    },
    tipo:{
        type:Number,
        required:true
    },
    estado:{
        type:Boolean,
        required:true
    }
});
module.exports=mongoose.model('producto',productoSchema);
