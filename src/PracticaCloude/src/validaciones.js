//Validaciones tiene que ser en realidad una funcion que recibe el objeto y verifica los parametros  
//retorna un booleano

const validaciones =({nombre,dano})=> {
    if(nombre.length<3)return false
    if(dano<=0)return false
    return true
}

module.exports = validaciones;