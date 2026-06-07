const filtros = {
nombre:(p) =>p.nombre.length>2,
salud:(p)=>p.salud>0
}

module.exports = filtros;