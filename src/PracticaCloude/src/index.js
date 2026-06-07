const express = require('express');
const { json } = require('node:stream/consumers');
const app = express();
app.use(express.json());
const hechizos = require('./data/hechizos.json')
const validaciones = require('./validaciones')
const filtros = require('./filtros/filtros')
const PORT =3001;
//console.log(filtros);
//----------Todos los gets ahora
app.get("/hechizos",(req,res)=>{
    res.status(200).json(hechizos)


})

app.post("/hechizos",(req,res)=>{
    const nuevoHechizo = req.body
    const productoValido = validaciones(nuevoHechizo)
    if(!productoValido)res.status(400).json({mensaje:`Paramentros ingesados incorrectamente`})
    nuevoHechizo.id = hechizos.length+1
    nuevoHechizo.activo = true
    //console.log(nuevoHechizo)
    res.status(201).json({nuevoHechizo})
})
app.post("/hechizos/filtros",(req,res)=>{
    const ArrFiltros = req.body

    const makeFn = ArrFiltros.map(f=>{
        //console.log(f.operator)
        //console.log(f.attribute)
        //console.log(f.value)
        
        return filtros[f.operator](f.attribute,f.value)})

    //console.log(makeFn)
    const hechizosFiltrados = hechizos.filter(h =>makeFn.every(fn=>fn(h)))
    res.status(200).json({hechizosFiltrados})
})

//----------Implemento el .listen
app.listen(PORT,(err)=>{
    if(err){
        console.log("Hubo un error, saliendo de la api")
        process.exit(1);
        
    }
    console.log(`Servidor levantado con exito, escuchando en el puerto${PORT}`)
})