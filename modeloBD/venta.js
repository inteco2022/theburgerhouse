const mongoose=require('mongoose');
const ventaSchema=new mongoose.Schema({
    descripcion:{
        type:String,
        required:true
    },
    total:{
        type:Number,
        required:true
    },
    idCliente:{
        type:Number,
        required:true
    },
    estado:{
        type:Boolean,
        default:true
    }
});
module.exports=mongoose.model('venta',ventaSchema);
