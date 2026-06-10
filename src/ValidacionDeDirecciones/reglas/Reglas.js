const reglas = [
(p)=>p.direccion.length>20 || p.direccion.length<60,
(p)=> p.direccion.includes("piso"),
(p)=>!(p.direccion.includes([" !", "@", "$", "%", "^", "&", "*", "( )", "_" ,"+","."])),
(p)=> p.direccion.includes("Calle")||p.direccion.includes("Avenida")||p.direccion.includes("Bulevar")||p.direccion.includes("Pasaje"),
(p)=> !(p.direccion.includes(["Av.","av.","Avda.","Ca.","Bul.","Pas."])),
(p)=> {    
    const  direccList = p.direccion.split;
    if (isNaN(direccList[direccList.length-1])){return false}
    return true
},
(p)=>{
    const direccionLista=  p.direccion.split;
    if(!direccionLista.every(d=> d[0] == d[0].toUpperCase()))return false
    return true
}

]


module.exports = reglas;