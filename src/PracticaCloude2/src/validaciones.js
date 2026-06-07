const validar = (sup)=>{
    if (sup.nombre.length<3)return "El campo nombre debe tener mas de 3 caracteres"
    if(sup.resistencia<=0)return "La resistencia debe ser un numero mayor a 0"
    if(sup.fuerza<=0)return "La fuerza debe ser un numero mayor a 0"
    if(sup.habilidades.length<2)return "El campo habilidades debe contener mas de dos habilidades"
    return true



}//va a retornar true si esta todo ok: si no retorna mensaje


module.exports = validar;