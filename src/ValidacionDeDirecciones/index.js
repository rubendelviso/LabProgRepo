const express = require('express');
const app = express();
app.use(express.json());
const PORT = 3001;
const direcciones= require('./data/clientes.json')
const FnsReglas = require('./reglas/Reglas')
//-----------Metodos
app.get("/direcciones-validas",(req,res)=>{
    
    const dirFiltradas =direcciones.filter(dir=>FnsReglas.every(fn => fn(dir)))
    if (dirFiltradas.length>1){
        res.status(200).json({mensaje:dirFiltradas})
    }
    else{res.status(400).json({mensaje:`Dirs no encontradas`})}
}
    

)

//-----------El listen

app.listen(PORT,(err)=>{
    if(err){
        process.exit(1);
        console.log(err);}
    console.log(`Puerto levantado con exito escuchando en el puerto${PORT}`)    
})