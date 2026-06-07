//console.log("server")
const express = require('express');
const app  = express()
app.use(express.json());
const PORT = 3001;
const supervivientes = require('../data/supervivientes.json')
const validacion = require('./validaciones');
const { type } = require('node:os');
const { string } = require('i/lib/util');
const filtros = require('./filtros/filtros')

app.get("/supervivientes",(req,res)=> res.status(200).json(supervivientes))

app.post("/supervivientes",(req,res)=>{
    const supervivienteNew = req.body
    console.log(validacion(supervivienteNew))
    const validacionRecibida = validacion(supervivienteNew)
    if(typeof(validacionRecibida)==="string")return res.status(400).json({validacionRecibida})
    supervivienteNew.id = supervivientes.length
    supervivienteNew.vivo = true
    return res.status(201).json({supervivienteNew})
})
app.post("/supervivientes/filtros",(req,res)=>{
    const filtrosRecibidos = req.body
    const makeFn = filtrosRecibidos.map(f=>{
        console.log(f.operator)
        console.log(f.attribute)
        console.log(f.value)
        console.log(filtros)
       return filtros[f.operator](f.attribute,f.value)
    
    })
    
    const superFiltrados = supervivientes.filter(s=>makeFn.every(fn=>fn(s)))
    res.status(200).json({superFiltrados})

})
app.listen(PORT,(err)=>{
    
    if(err){process.exit(1);}
    console.log(`Server levantado con exito escuchando en el puerto ${PORT}`)

})