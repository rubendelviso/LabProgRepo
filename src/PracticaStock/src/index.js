const express = require('express')
const app = express();

const PORT = 3001;
const fns = require("../filtros/Funcs.js")
const producs = require("../data/productos.json")
//console.log(fns);
app.use(express.json())
//------EndPoints
app.post("/productos/filtrar",(req,res)=>{
        /*
    1_Desempaqueto el body
    2_Hago las funciones (makefns) respecto a lo que recibo en el body
    3_Paso los productos (todos) a las funciones recibidads 
    */ 
    
    const objetosRecibidos = req.body;
    //console.log("Hola",fns)
    const makeFns = objetosRecibidos.map(
        ({fn,values})=> { //Hago destructuring de lo que recibo
            //console.log(fn,values)
            return (p)=>fns[fn](p,values) //Creo Cada funcion segun lo que traje en el body
        }
    )
    //console.log("LLEGUE",makeFns.toString())
    const productosFiltrados = producs.filter(p => makeFns.every(fnA => fnA(p)));
    //console.log(productosFiltrados)
    res.status(200).json(productosFiltrados)
}

)


//---MetodoListen
app.listen(PORT,(err)=>{
    if(err){
        console.log("Ups algo salio mal,saliendo del servidor")
        process.exit(1)
    }
    console.log(`Puerto Levantado con exito, escuchando en el puerto${PORT}`)
}
)

