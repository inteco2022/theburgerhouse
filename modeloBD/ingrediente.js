const mongoose=require('mongoose');
const ingredienteSchema=new mongoose.Schema({
    nombre:{
        type:String,
        required:true
    },
    foto:{
        type:String,
        required:true
    },
    cantidad:{
        type:Number,
        required:true
    },
    estado:{
        type:Boolean,
        required:true
    }
});
module.exports=mongoose.model('ingrediente',ingredienteSchema);
