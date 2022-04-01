const express=require('express');
const mongoose=require('mongoose');
const session=require('express-session');
const path=require('path');
const multer=require('multer'); // subir fotos al servidor
//const usuarios=require('./rutas/');
const sesiones=require('./rutas/sesiones'); 
const control=require('./rutas/control');
const cliente=require('./rutas/cliente');
const ventas=require('./rutas/ventasR')
const app=express();
app.set('view engine', 'ejs');
app.use('/css',express.static(__dirname+'/css'));
app.use('/',express.static(path.join(__dirname,"/webPages")));
app.use(express.urlencoded({extended:true}));//recibe datos de un formulario - extended en true para recibir archivos
app.use(session({
    secret:"xml",
    resave:true,
    saveUninitialized:true
}));
// multer, fotos en el servidor
app.use(multer({
    storage:multer.diskStorage({
        destination:(req,file,cb)=>{
            cb(null,'webPages/images');
        },
        filename:(req,file,cb)=>{
            cb(null,file.originalname);
        }
    })
}).single('fotoProd'));
app.use( express.static( "public" ) );
app.use('/', control);
app.use('/cliente', cliente);
app.use('/theburgerhouse', sesiones);
app.use('/ventas', ventas)

mongoose.connect('mongodb+srv://fernando:Hqtsnra8@cluster0.poklj.mongodb.net/Hamburgesas?retryWrites=true&w=majority')
.then(()=>{
    console.log('Conectado correctamente a MongoDB');
})  
.catch((err)=>{
    console.log('Error '+err)
})
//Levantamos el servidor para poder desarrollar la pagina
//Levantamos el servidor para poder desarrollar la pagin
const port=process.env.PORT||8080
app.listen(port,()=>{
    console.log("Servidor en el puerto "+port);
});

//