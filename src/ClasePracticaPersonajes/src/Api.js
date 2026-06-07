//console.log("Hola")
const personajes = require('../data/personajes.json')
const filtros = require('./validaciones.js')
const express = require('express');
const app = express();
app.use(express.json());
const PORT = 3002;
const filtrosOperaciones = require('./filtros/filtros.js')
//console.log(filtrosOperaciones)
//-----endpoints---
app.get("/personajes",(req,res)=>{
    res.status(200).json(personajes);
})
app.post("/personajes",(req,res)=>{
    const personajeRecibido = req.body;
    //Considerando que recibo un solo personaje 

    //Aplico un solo filtro
    //if(isNaN(personajeRecibido.id))res.status(400).json({mensaje:"El id debe ser un numero"})
    if(personajeRecibido.salud<0)res.status(400).json({mensaje:"El personaje no puede tener salud negativa"})
    if(personajeRecibido.habilidades.length = 0)res.status({mensaje:"El personaje debe tener habilidades consigo"})
    //res.status(201).json({mensaje:"Se creo el personaje con exito"})
    const idBusc = personajes.length+1
    personajeRecibido.activo = true
    personajeRecibido.id = idBusc
    console.log(personajeRecibido)
    //const personajesFiltrados = personajes.filter(p=>filtros.every(fn=>fn(p)));
    res.status(201).json({mensaje:"El recurso fue creado con exito"})
    }) 
    
app.post("/personajes/filtros",(req,res)=>{
    const filtrosRecibidos = req.body
    const makeFn= filtrosRecibidos.map( 

        fil=>{
            //console.log(fil.operator)
            //console.log(fil.attribute)
            //console.log(fil.value)
            return filtrosOperaciones[fil.operator](fil.attribute,fil.value)}
    )

    const personajesFiltrados=  personajes.filter(p=>makeFn.every(fn=> fn(p)))

    res.status(200).json({personajesFiltrados})

})
//-----Callback

app.listen(PORT,(err)=>{
    if(err){
        process.exit(1);
        console.log("Ocurrio un error, saliendo de la api")
    }
    console.log(`Puerto levantado y escuchando en ${PORT}`)
})