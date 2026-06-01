const Funciones = {
stock:(p,value)=>p.stock>value,
precio:(p,value)=>p.precio>value,
nombre:(p,value)=> p.nombre.length() < value,
categoria:(p,value)=>value.includes(p.categorias),
precio:(p,{min,max})=> p.precio>min && p.precio<max,
nombremedida:(p,{min,max})=> p.nombre.length>min && p.nombre.length<max,
Tematica:(p,{cat,pal})=>p.nombre.includes(pal)&& cat.includes(p.categorias)
}

module.exports = Funciones;

//Pensando uno que solo devuelva cosas de futbol