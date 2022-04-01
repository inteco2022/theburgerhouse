const mongoose=require('mongoose');
const especialSchema=new mongoose.Schema({
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
        required:true,
        default:1
    },
    alta:{
        type:Number,
        default:1
    }
});
module.exports=mongoose.model('especial',especialSchema);
